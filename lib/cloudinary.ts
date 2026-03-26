export interface CloudinaryResource {
  public_id: string;
  version: number;
  format: string;
}

export interface CloudinaryListResponse {
  resources: CloudinaryResource[];
}

export async function getImagesBySport(sport: string): Promise<string[]> {
  // Use environment variable for cloud name or default to a placeholder
  // Note: For client-side image lists to work, the Cloudinary account must have 
  // "Resource list" enabled in Security settings
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME || 'demo';
  
  try {
    // Cloudinary list API format requires the tag name
    const url = `https://res.cloudinary.com/${cloudName}/image/list/${sport.toLowerCase()}.json`;
    
    // Disable caching for portfolio updates
    const response = await fetch(url, { cache: 'no-store' });
    
    if (!response.ok) {
      console.warn(`Could not fetch images for sport: ${sport}. Cloudinary might not have the tag or list access is disabled.`);
      return [];
    }
    
    const data: CloudinaryListResponse = await response.json();
    
    return data.resources.map(
      (res) => `https://res.cloudinary.com/${cloudName}/image/upload/v${res.version}/${res.public_id}.${res.format}`
    );
  } catch (error) {
    console.error(`Error fetching images for ${sport}:`, error);
    return [];
  }
}

export interface Category {
  title: string;
  href: string;
  imageSrc: string;
}

export async function getSportsCategories(): Promise<Category[]> {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME || 'demo';
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  const defaultCategories: Category[] = [
    { title: "Volleyball", href: "/portfolio/volleyball", imageSrc: "https://images.unsplash.com/photo-1628892189689-53e9ea7a5525?q=80&w=2070&auto=format&fit=crop" },
    { title: "Hockey", href: "/portfolio/hockey", imageSrc: "https://images.unsplash.com/photo-1512288094938-363287817259?q=80&w=1974&auto=format&fit=crop" },
    { title: "Basketball", href: "/portfolio/basketball", imageSrc: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop" },
  ];

  if (!apiKey || !apiSecret) {
    return defaultCategories;
  }

  try {
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/tags/image`;
    const basicAuth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
    
    const response = await fetch(url, { 
      headers: {
        'Authorization': `Basic ${basicAuth}`
      },
      next: { revalidate: 60 } 
    }); // Reval every min
    
    if (!response.ok) {
      return defaultCategories; 
    }

    const data = await response.json();
    const tags: string[] = data.tags || [];

    if (tags.length === 0) return defaultCategories;

    const categories: Category[] = [];
    
    for (const tag of tags) {
      if (!tag || tag.toLowerCase() === 'about') continue;
      
      const images = await getImagesBySport(tag);
      const title = tag.charAt(0).toUpperCase() + tag.slice(1);
      
      categories.push({
        title,
        href: `/portfolio/${tag.toLowerCase()}`,
        // Use the first returned image or fallback to a placeholder if the tag has no images
        imageSrc: images.length > 0 ? images[0] : defaultCategories.find(c => c.title.toLowerCase() === tag.toLowerCase())?.imageSrc || "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop"
      });
    }

    return categories;
  } catch (err) {
    console.error("Error fetching sports categories from Cloudinary", err);
    return defaultCategories;
  }
}

export async function getAboutImage(): Promise<string | null> {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME || 'demo';
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!apiKey || !apiSecret) return null;

  try {
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/tags/about?max_results=1`;
    const basicAuth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
    
    const response = await fetch(url, { 
      headers: { 'Authorization': `Basic ${basicAuth}` },
      next: { revalidate: 60 } 
    });

    if (response.ok) {
      const data = await response.json();
      if (data.resources && data.resources.length > 0) {
        return data.resources[0].secure_url;
      }
    }
  } catch (err) {
    console.error("Error fetching about image:", err);
  }
  return null;
}
