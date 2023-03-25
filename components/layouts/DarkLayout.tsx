import { FC, ReactNode } from "react";
 
type Props = {
  children: ReactNode;
};

export const DarkLayout: FC<Props> = ({ children } )=> {
  return (
    <div style={{
        backgroundColor: 'rgba(256,256,256,0.3)',
        borderRadius: '10px',
        padding: '10px',
    }}>
        <h3>Dark-Layout</h3>
        <div>
            { children }
        </div>
    </div>
  )
}
