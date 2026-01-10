import { PropsWithChildren } from 'react'

export function Title(props: PropsWithChildren) {
  return (
    <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold text-slate-800 text-pretty max-w-3xl">
      {props.children}
    </h1>
  )
}