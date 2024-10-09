import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from 'next/image';
import Link from 'next/link';
import { pizzas } from '../lib/pizzaData';

export default function PizzaMenu() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {pizzas.map((pizza) => (
        <Link href={`/pizza/${pizza.id}`} key={pizza.id}>
          <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg">
            <CardHeader className="p-0">
              <Image
                src={pizza.image}
                alt={pizza.name}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-xl mb-2">{pizza.name}</CardTitle>
              <p className="text-sm text-gray-600">{pizza.shortDescription}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}