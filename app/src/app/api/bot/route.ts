import { NextResponse } from 'next/server';
import { botService } from '@/lib/botService';

export async function GET() {
  return NextResponse.json(botService.getState());
}

export async function POST(request: Request) {
  const { action } = await request.json();
  
  if (action === 'start') {
    botService.start();
  } else if (action === 'stop') {
    botService.stop();
  }
  
  return NextResponse.json(botService.getState());
}
