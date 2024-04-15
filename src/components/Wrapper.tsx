import { PropsWithChildren } from "react"

interface IWrapper {}

export default function Wrapper (props: PropsWithChildren<IWrapper>) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
    }}>
      {props.children}
    </div>
  )
}