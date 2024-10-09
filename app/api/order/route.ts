import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  
  // Aquí normalmente procesarías el pedido, lo guardarías en una base de datos, etc.
  console.log('Pedido recibido:', body);

  // Simulamos un pequeño retraso para imitar una operación de red
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Devolvemos una respuesta exitosa
  return NextResponse.json({ message: 'Pedido procesado con éxito' }, { status: 200 });
}