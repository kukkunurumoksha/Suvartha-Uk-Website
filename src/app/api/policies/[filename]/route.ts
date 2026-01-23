import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  try {
    const { filename } = await params;
    console.log('=== PDF API ROUTE CALLED ===');
    console.log('Requested filename:', filename);
    console.log('Request URL:', request.url);
    
    // Security check - only allow PDF files
    if (!filename.endsWith('.pdf')) {
      console.log('REJECTED: Not a PDF file:', filename);
      return new NextResponse('Not Found', { status: 404 });
    }
    
    // Read the PDF file from public/policies directory
    const filePath = join(process.cwd(), 'public', 'policies', filename);
    console.log('File path:', filePath);
    
    const fileBuffer = await readFile(filePath);
    console.log('SUCCESS: File read, size:', fileBuffer.length, 'bytes');
    
    // Return the PDF with headers that allow Chrome's native viewer
    return new NextResponse(fileBuffer as any, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline',
        'Cache-Control': 'no-cache, no-store, must-revalidate, private',
        'Pragma': 'no-cache',
        'Expires': '0',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'Referrer-Policy': 'no-referrer',
        'X-Robots-Tag': 'noindex, nofollow, nosnippet, noarchive, noimageindex',
      },
    });
  } catch (error) {
    console.error('=== PDF API ERROR ===');
    console.error('Error details:', error);
    return new NextResponse('PDF not found', { status: 404 });
  }
}