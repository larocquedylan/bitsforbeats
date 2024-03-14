import Image from "next/image";

export default function Component() {
  const albums = [
    {
      alt: "Prodigy Unmixed",
      src: "/placeholder.svg",
      title: "Prodigy Unmixed",
      artist: "Artist Name",
    },
    {
      alt: "GritFall",
      src: "/placeholder.svg",
      title: "GritFall 2",
      artist: "Gritfall",
    },
    {
      alt: "GritFall 3",
      src: "/placeholder.svg",
      title: "GritFall 3",
      artist: "Gritfall",
    },
    {
      alt: "GritFall 4",
      src: "/placeholder.svg",
      title: "GritFall 4",
      artist: "Gritfall",
    },
    {
      alt: "GritFall 5",
      src: "/placeholder.svg",
      title: "GritFall 5",
      artist: "Gritfall",
    },
    {
      alt: "GritFall 6",
      src: "/placeholder.svg",
      title: "GritFall 6",
      artist: "Gritfall",
    },
    {
      alt: "GritFall 7",
      src: "/placeholder.svg",
      title: "GritFall 7",
      artist: "Gritfall",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {albums.map((album, index) => (
          <div key={index} className="flex flex-col items-start">
            <Image
              alt={album.alt}
              className="mb-2 rounded-lg border shadow"
              height="200"
              src={album.src}
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <div className="text-left w-36">
              <p className="font-normal">{album.title}</p>
              <p className="text-sm text-gray-500">{album.artist}</p>
            </div>
          </div>
        ))}
        <div />
      </div>
    </div>
  );
}
