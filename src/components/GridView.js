/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const actors = [
  {
    id: 1,
    name: "Tim Robbins",
    href: "#",
    role: "Andy Dufresne",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BMTI1OTYxNzAxOF5BMl5BanBnXkFtZTYwNTE5ODI4._V1_UY176_CR4,0,128,176_AL_.jpg",
  },
  {
    id: 2,
    name: "Morgan Freeman",
    href: "#",
    role: "Ellis Boyd 'Red' Redding",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_UX128_CR0,0,128,176_AL_.jpg",
  },
  {
    id: 3,
    name: "Bob Gunton",
    href: "#",
    role: "Warden Norton",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BMjUyZDQ0NjktZmM5ZS00NzcxLTliMWYtNWUxNDcyMmExZjU0XkEyXkFqcGdeQXVyMTE1MjA4NzM@._V1_UY176_CR4,0,128,176_AL_.jpg",
  },
  {
    id: 4,
    name: "William Sadler",
    href: "#",
    role: "Heywood",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BMTA1NjU3NDg1MTheQTJeQWpwZ15BbWU2MDI4OTcxMw@@._V1_UY176_CR8,0,128,176_AL_.jpg",
  },

  {
    id: 5,
    name: "Clancy Brown",
    href: "#",
    role: "Captain Hadley",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BMTUxODY3NjAzMF5BMl5BanBnXkFtZTcwMTQ5MjYwNg@@._V1_UX128_CR0,0,128,176_AL_.jpg",
  },

  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    role: "Ellis Boyd 'Red' Redding",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
  },

  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    role: "Ellis Boyd 'Red' Redding",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
  },

  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    role: "Ellis Boyd 'Red' Redding",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
  },
];

export default function GridView() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {actors.map((actor) => (
            <a key={actor.id} href={actor.href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={actor.imageSrc}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{actor.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {actor.role}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
