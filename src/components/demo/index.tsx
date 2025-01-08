import { useEffect, useRef } from 'react';
import './style.css';

interface IProps {
  currentId: string;
}

export default function Demo(props: IProps) {
  const { currentId } = props;
  const currentIdRef = useRef(currentId);

  useEffect(() => {
    currentIdRef.current = currentId;
  }, [currentId]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log('currentIdRef', currentIdRef.current);// 当click Me时，currentIdRef的值为item-2
      console.log('currentId', currentId); // 当click Me时，currentId的值为item-1
    });
  }, []);

  return (
    <>
      <div className='demo-container'>
        haha
      </div>
    </>
  )
}