const preferred = [
    {
        img: " https://m.media-amazon.com/images/I/61L+8yHlu4L._SX679_.jpg",
        name: "Dress 1",
        price: "$100"
    },
    {
        img: "https://m.media-amazon.com/images/I/61IM5ThpPFL._SX679_.jpg",
        name: "Dress 2",
        price: "$200"
    },
    {
        img: "https://m.media-amazon.com/images/I/51j2mBT8iiL._SX385_.jpg",
        name: "Dress 3",
        price: "$300"
    },
    {
        img: "https://m.media-amazon.com/images/I/51-pLhPHoBL._SY550_.jpg",
        name: "Dress 4",
        price: "$400"
    },
    {
        img: "https://m.media-amazon.com/images/I/51-pLhPHoBL._SY550_.jpg",
        name: "Dress 5",
        price: "$500"
    },
    {
        img: "https://m.media-amazon.com/images/I/51-pLhPHoBL._SY550_.jpg",
        name: "Dress 6",
        price: "$600"
    },
    {
        img: "https://m.media-amazon.com/images/I/51-pLhPHoBL._SY550_.jpg",
        name: "Dress 7",
        price: "$700"
    }
];

const description = [
    "This is product the most selled product of this Month !!!",
    "This is product the most selled product of this Year !!!",
    "This is product the most selled product of this Week !!!"
];

export default function Prefprods() {
    return (
        <>
            {preferred.map((prod, i) => (
                <div key={i} className="flex flex-wrap flex-col justify-center gap-2">
                    <img
                        src={prod.img}
                        className="h-50 w-40 object-cover shadow-2xs border-2 rounded-md"
                    />
                    <p className="mt-1 text-sm font-medium text-center">{prod.name}</p>
                    <p className="text-sm font-medium text-center">{prod.price}</p>
                    <button
                        className="border-1 rounded-2xl h-fit w-fit p-1 ml-10 bg-black text-white hover:bg-gray-500 hover:text-black cursor-pointer text-sm">
                        Add To Cart
                    </button>
                </div>
            ))}
        </>
    );

}