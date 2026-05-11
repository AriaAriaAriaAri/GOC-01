type Props = {
  decorImage: string
  title: string
  description: string
  bigImage: string
  bigImageHeight?: number
  decorSize?: number
  decorScale?: number
}

export default function FeatureSection({
  decorImage,
  title,
  description,
  bigImage,
  bigImageHeight = 543,
  decorSize = 170,
  decorScale = 1,
}: Props) {
  return (
    <section className="mx-auto flex max-w-[1280px] flex-col items-center px-6 py-24">
      <img
        src={decorImage}
        alt=""
        className="object-cover object-center"
        style={{
          height: decorSize,
          width: decorSize,
          transform: decorScale === 1 ? undefined : `scale(${decorScale})`,
          transformOrigin: 'center',
        }}
      />

      <h2
        className="text-gradient-white mt-2 text-center"
        style={{
          fontSize: 'clamp(40px, 4.5vw, 56px)',
          lineHeight: '1.2',
          letterSpacing: '-2.8px',
        }}
      >
        {title}
      </h2>

      <p className="mt-3 max-w-[700px] text-center text-[18px] leading-[27px] text-[#a1a4a5]">
        {description}
      </p>

      <div
        className="relative mt-8 w-full overflow-hidden rounded-3xl"
        style={{ height: bigImageHeight }}
      >
        <img
          src={bigImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.85) 100%)',
          }}
        />
      </div>
    </section>
  )
}
