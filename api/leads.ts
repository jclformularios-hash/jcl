
/**
 * Example Next.js 14 Route Handler for /api/leads
 * This file serves as documentation/implementation for a real deployment.
 */

/*
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    // Extracting fields
    const nome = formData.get('nome');
    const email = formData.get('email');
    const telefone = formData.get('telefone');
    const cnpj = formData.get('cnpj');
    const valor = formData.get('valor');
    const solution = formData.get('solution');
    const file = formData.get('document') as File;

    const leadData = {
      nome,
      email,
      telefone,
      cnpj,
      valor,
      solution,
      timestamp: new Date().toISOString(),
      fileInfo: file ? { name: file.name, size: file.size, type: file.type } : null
    };

    console.log('--- NEW LEAD RECEIVED ---');
    console.log(leadData);

    // Send to Webhook if exists
    if (process.env.WEBHOOK_URL) {
      await fetch(process.env.WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData),
      });
    }

    // Response
    return NextResponse.json({ ok: true, message: 'Lead captured successfully' });
  } catch (error) {
    return NextResponse.json({ ok: false, error: 'Internal server error' }, { status: 500 });
  }
}
*/

// Mock exported function for build consistency in React Environment
export const mockApiHandler = () => {
  console.log("Mock API Handler for leads ready.");
};
