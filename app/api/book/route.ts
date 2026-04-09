import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get('session_id');
  // Could verify session with Stripe here
  return NextResponse.json({ success: true, sessionId });
}
