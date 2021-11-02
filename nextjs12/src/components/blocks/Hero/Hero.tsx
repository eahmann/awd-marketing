import classNames from "classnames"

import ButtonLink from "@/components/shared/ButtonLink"
import NextImage from "@/components/shared/NextImage/NextImage"

const Hero = ({ image, title, label, text, buttons, settings }) => {
  const { marginTop, marginBottom } = settings
  return (
    <section
      className={classNames({ "mt-20": marginTop }, { "mb-20": marginBottom })}
    >
      {/* <div className="lg:relative">
        <div className="w-full pt-16 mx-auto text-center lg:py-48 max-w-8xl lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">{title}</span>
            </h1>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block text-brand-500 xl:inline">{label}</span>
            </h1>
            <p className="max-w-md mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 lg:mx-0">
              {text}
            </p>
            <div className="flex flex-col mt-4 mb-6 lg:mb-0 lg:flex-row">
              {buttons.map((button) => (
                <ButtonLink
                  key={button.id}
                  button={button}
                  className="mt-4 lg:mr-4 lg:last:mr-0 lg:mt-0"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="relative z-50 w-full h-64 overflow-visible sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <NextImage media={image} layout="fill" />
        </div>
      </div> */}
      <div className="pt-2 lg:pb-14 lg:overflow-visible">
        <div className="mx-auto lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 max-w-8xl">
            <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24">
                <div className="uppercase text-brand-500 font-bold sm:text-base lg:text-sm xl:text-base">
                  <span className="text-md">{label}</span>
                </div>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">{title} line 1</span>
                  <span className="block text-indigo-400">{title} line 2</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  {text}
                </p>
              </div>
            </div>
            <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
              <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                <NextImage media={image} layout="responsive" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
