import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  try {
    const { filename } = await params;
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    
    // Security check - only allow specific PDF files
    const allowedFiles = [
      'Data Protection Policy and Procedure.pdf',
      'Internal risk management policy and procedures.pdf',
      'Safeguarding Policy and Procedures.pdf'
    ];
    
    if (!allowedFiles.includes(filename)) {
      return new NextResponse('Not Found', { status: 404 });
    }
    
    // Generate watermarked PDF page as SVG image
    const watermarkedSvg = `
      <svg width="800" height="1100" xmlns="http://www.w3.org/2000/svg">
        <!-- Page background -->
        <rect width="100%" height="100%" fill="#ffffff"/>
        <rect x="40" y="40" width="720" height="1020" fill="white" stroke="#e0e0e0" stroke-width="1"/>
        
        <!-- Header -->
        <rect x="60" y="60" width="680" height="80" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/>
        <text x="400" y="90" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#212529">
          ${filename.replace('.pdf', '')}
        </text>
        <text x="400" y="110" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#6c757d">
          Suvartha Ministries UK - Confidential Document
        </text>
        
        <!-- Content area with simulated text -->
        <g fill="#333333" font-family="Arial, sans-serif" font-size="11">
          <!-- Paragraph 1 -->
          <text x="80" y="180" font-weight="bold" font-size="14">1. Introduction</text>
          <text x="80" y="200">This policy outlines the procedures and guidelines for ${filename.includes('Data Protection') ? 'data protection and privacy' : filename.includes('Risk') ? 'risk management and assessment' : 'safeguarding and child protection'}.</text>
          <text x="80" y="215">All members, staff, and volunteers must adhere to these policies to ensure compliance</text>
          <text x="80" y="230">with UK regulations and maintain the highest standards of ${filename.includes('Data Protection') ? 'data security' : filename.includes('Risk') ? 'risk management' : 'safeguarding'}.</text>
          
          <!-- Paragraph 2 -->
          <text x="80" y="270" font-weight="bold" font-size="14">2. Scope and Application</text>
          <text x="80" y="290">This policy applies to all activities conducted by Suvartha Ministries UK, including:</text>
          <text x="100" y="310">• Church services and religious activities</text>
          <text x="100" y="325">• Administrative and operational procedures</text>
          <text x="100" y="340">• Volunteer and staff management</text>
          <text x="100" y="355">• Community outreach programs</text>
          
          <!-- Paragraph 3 -->
          <text x="80" y="395" font-weight="bold" font-size="14">3. Key Principles</text>
          <text x="80" y="415">Our organization is committed to maintaining the highest standards of ${filename.includes('Data Protection') ? 'data protection' : filename.includes('Risk') ? 'risk assessment' : 'child safety'}.</text>
          <text x="80" y="430">We ensure that all procedures are regularly reviewed and updated to reflect current</text>
          <text x="80" y="445">best practices and legal requirements.</text>
          
          <!-- More content -->
          <text x="80" y="485" font-weight="bold" font-size="14">4. Implementation</text>
          <text x="80" y="505">All staff and volunteers will receive appropriate training on this policy.</text>
          <text x="80" y="520">Regular audits and reviews will be conducted to ensure compliance.</text>
          <text x="80" y="535">Any violations or concerns should be reported immediately to the designated officer.</text>
          
          <!-- Footer content -->
          <text x="80" y="575" font-weight="bold" font-size="14">5. Contact Information</text>
          <text x="80" y="595">For questions regarding this policy, please contact:</text>
          <text x="80" y="610">Email: suvarthaministriesuk@gmail.com</text>
          <text x="80" y="625">Phone: +44 7427527524</text>
        </g>
        
        <!-- Watermark - Multiple layers for security -->
        <g opacity="0.1" fill="#dc3545">
          <text x="400" y="300" text-anchor="middle" font-family="Arial, sans-serif" font-size="60" font-weight="bold" transform="rotate(-45 400 300)">
            CONFIDENTIAL
          </text>
          <text x="400" y="500" text-anchor="middle" font-family="Arial, sans-serif" font-size="40" font-weight="bold" transform="rotate(-45 400 500)">
            SUVARTHA MINISTRIES UK
          </text>
          <text x="400" y="700" text-anchor="middle" font-family="Arial, sans-serif" font-size="60" font-weight="bold" transform="rotate(-45 400 700)">
            CONFIDENTIAL
          </text>
        </g>
        
        <!-- Visible watermark -->
        <text x="400" y="950" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="#dc3545" opacity="0.3" font-weight="bold">
          🔒 PROTECTED DOCUMENT
        </text>
        
        <!-- Page number -->
        <text x="400" y="1050" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#6c757d">
          Page ${page} of 3 - ${new Date().getFullYear()} Suvartha Ministries UK
        </text>
        
        <!-- Security notice -->
        <rect x="60" y="1060" width="680" height="30" fill="#fff3cd" stroke="#ffeaa7" stroke-width="1"/>
        <text x="400" y="1078" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#856404">
          ⚠️ This document is confidential and protected. Unauthorized copying, distribution, or reproduction is prohibited.
        </text>
      </svg>
    `;
    
    return new NextResponse(watermarkedSvg, {
      status: 200,
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'no-cache, no-store, must-revalidate, private',
        'Pragma': 'no-cache',
        'Expires': '0',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'Referrer-Policy': 'no-referrer',
        'X-Robots-Tag': 'noindex, nofollow, nosnippet, noarchive, noimageindex',
        'Content-Security-Policy': "default-src 'none'; img-src 'self';",
      },
    });
  } catch (error) {
    return new NextResponse('Image generation failed', { status: 500 });
  }
}