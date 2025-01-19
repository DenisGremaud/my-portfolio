import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

// This route will handle all GET requests to /api/img/*
export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    // Join all path segments to create the full image path
    // Example: /api/img/projects/portfolio.png -> app/img/projects/portfolio.png
    const imagePath = path.join(process.cwd(), 'app', 'img', ...params.path);

    // Read the image file into a buffer
    const fileBuffer = await fs.promises.readFile(imagePath);

    // Get file extension and map to correct MIME type
    const ext = path.extname(imagePath).toLowerCase();
    const contentType =
      {
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
      }[ext] || 'application/octet-stream';

    // Return the image with proper headers
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    return new NextResponse(error.message, { status: 404 });
  }
}
