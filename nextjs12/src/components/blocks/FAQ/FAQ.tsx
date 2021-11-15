import { Disclosure, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/outline"
import classNames from "classnames"

const FAQ = ({ title, questions }) => {
  return (
    <section>
      <div className="mb-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div
            className="max-w-3xl mx-auto bg-gray-100 divide-y-2 divide-brand-500 dark:bg-indigo-800 rounded-t-md"
            id={title.split(" ").join("-").toLowerCase()}
          >
            {title && (
              <h2 className="px-2 pt-2 text-xl font-extrabold text-left text-gray-800 dark:text-gray-100 dark: sm:text-xl">
                {title}
              </h2>
            )}
            <dl className="mt-2 bg-indigo-600 space-y-6 divide-y divide-gray-200 dark:bg-indigo-900">
              {questions.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <div
                      className={classNames(
                        open
                          ? "bg-indigo-700 dark:bg-indigo-600 rounded-md"
                          : "rotate-0",
                        "p-2 transition-all duration-150"
                      )}
                    >
                      <dt className="text-lg">
                        <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-200">
                          <span className="font-bold">{faq.question}</span>
                          <span className="flex items-center ml-6 h-7">
                            <ChevronDownIcon
                              className={classNames(
                                open ? "-rotate-180" : "rotate-0",
                                "h-6 w-6 transform duration-150"
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Transition
                        enter="transition duration-200 ease-out"
                        enterFrom="transform scale-75 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-150 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel as="dd" className="pr-12 mt-2 bg">
                          <p className="text-base text-gray-200">
                            {faq.answer}
                          </p>
                        </Disclosure.Panel>
                      </Transition>
                    </div>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
