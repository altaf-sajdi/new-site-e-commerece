import { NextResponse } from 'next/server';
import { getProductById } from '@/lib/api/products';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const product = await getProductById(params.id);
  
  if (!product) {
    return NextResponse.json(
      { error: 'Product not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(product);
}