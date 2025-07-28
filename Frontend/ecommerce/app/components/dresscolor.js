const color = [

    "https://plainbackground.com/plain1024/ff2800.png",
    "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-blue-solid-color-background.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFKdIQ_is-vkvl8UPbvRolFirNeggIIjJ-9A&s",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Solid_black.svg/500px-Solid_black.svg.png"


];

export default function ColorOptions() {
    return (
        <div className="flex h-15 w-15 gap-2 mt-2">
            {color.map((clr, i) => (
                <img
                    key={i}
                    src={clr}
                    alt={`colors ${i + 1}`}
                    className="border rounded-2xl hover:ring-1 ring-black cursor-pointer size-10"
                />
            ))}
        </div>
    );
}