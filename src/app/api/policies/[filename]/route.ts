import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: { filename: string } }
) {
  try {
    const filename = params.filename;
    console.log('API Route - Requested filename:', filename);
    
    // Security check - only allow PDF files
    if (!filename.endsWith('.pdf')) {
      console.log('API Route - Rejected non-PDF file:', filename);
      return new NextResponse('Not Found', { status: 404 });
    }
    
    // Read the PDF file from public/policies directory
    const filePath = join(process.cwd(), 'public', 'policies', filename);
    console.log('API Route - File path:', filePath);
    
    const fileBuffer = await readFile(filePath);
    console.log('API Route - File read successfully, size:', fileBuffer.length, 'bytes');
    
    // Return the PDF with maximum protection headers
    return new NextResponse(fileBuffer as any, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="Protected_Church_Policy.pdf"', // Generic name to prevent easy identification
        'Cache-Control': 'no-cache, no-store, must-revalidate, private',
        'Pragma': 'no-cache',
        'Expires': '0',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN', // Changed from DENY to SAMEORIGIN to allow iframe
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'no-referrer',
        // Additional protection headers
        'X-Permitted-Cross-Domain-Policies': 'none',
        'X-Download-Options': 'noopen',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      },
    });
  } catch (error) {
    console.error('API Route - Error serving PDF:', error);
    return new NextResponse('PDF not found', { status: 404 });
  }
}