import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  try {
    const { filename } = await params;
    
    // Security check - only allow PDF files
    if (!filename.endsWith('.pdf')) {
      return new NextResponse('Not Found', { status: 404 });
    }
    
    // Read the PDF file from public/policies directory
    const filePath = join(process.cwd(), 'public', 'policies', filename);
    const fileBuffer = await readFile(filePath);
    
    // Return the PDF with copy protection headers
    return new NextResponse(fileBuffer as any, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="protected-document.pdf"',
        'Cache-Control': 'no-cache, no-store, must-revalidate, private',
        'Pragma': 'no-cache',
        'Expires': '0',
        'X-Frame-Options': 'SAMEORIGIN',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'no-referrer',
        'X-Robots-Tag': 'noindex, nofollow, nosnippet, noarchive, noimageindex',
        'Feature-Policy': 'clipboard-read=(), clipboard-write=()',
        'Permissions-Policy': 'clipboard-read=(), clipboard-write=()',
      },
    });
  } catch (error) {
    return new NextResponse('PDF not found', { status: 404 });
  }
}