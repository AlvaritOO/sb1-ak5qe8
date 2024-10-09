import { pizzas } from '../../../lib/pizzaData';
import Image from 'next/image';
import { Button } from '../../../components/ui/button';

export function generateStaticParams() {
  return pizzas.map((pizza) => ({
    id: pizza.id,
  }));
}

export default function PizzaDetail({ params }: { params: { id: string } }) {
  const pizza = pizzas.find(p => p.id === params.id);

  if (!pizza) {
    return <div>Pizza no encontrada</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          src={pizza.image}
          alt={pizza.name}
          width={1000}
          height={500}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{pizza.name}</h1>
          <p className="text-gray-600 mb-4">{pizza.fullDescription}</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-green-600">${pizza.price.toFixed(2)}</span>
            <Button>Comprar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}