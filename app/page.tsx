import PizzaMenu from '../components/PizzaMenu';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8">Nuestras Pizzas</h1>
      <PizzaMenu />
    </div>
  );
}