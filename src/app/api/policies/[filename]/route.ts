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
    
    // Return PDF with maximum security headers
    return new NextResponse(fileBuffer as any, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="protected-document.pdf"',
        'Cache-Control': 'no-cache, no-store, must-revalidate, private, max-age=0',
        'Pragma': 'no-cache',
        'Expires': '0',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'Referrer-Policy': 'no-referrer',
        'X-Robots-Tag': 'noindex, nofollow, nosnippet, noarchive, noimageindex, notranslate',
        'Content-Security-Policy': "default-src 'self'; script-src 'none'; object-src 'none'; frame-ancestors 'self';",
        'X-Download-Options': 'noopen',
        'X-Permitted-Cross-Domain-Policies': 'none',
        'Permissions-Policy': 'clipboard-read=(), clipboard-write=(), camera=(), microphone=(), geolocation=(), payment=()',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
        'X-XSS-Protection': '1; mode=block',
      },
    });
  } catch (error) {
    return new NextResponse('PDF not found', { status: 404 });
  }
}