import React from 'react';
import CircleSvg from '../../assets/svg/circle.svg';
import CrossSvg from '../../assets/svg/cross.svg';
import NoneSvg from '../../assets/svg/none.svg ';
import { TEAM_VALUE } from '../../models/inputValue.enum';

const Alert = ({ winner, restartMacth, draw }) => {

    return (
        <div className='absolute bg-black bg-opacity-40 h-screen w-full flex items-center justify-center text-white'>
            <section className='flex flex-col items-center py-10 px-14 rounded-2xl'>
                <span className='mb-7 text-xl font-bold'>{draw ? 'Han empatado' : 'Ha ganado el equipo:'}</span>
                <div className='my-5'>

                    {draw ? <NoneSvg color={'white'} />
                        : winner === TEAM_VALUE.CIRCLE ?
                            <CircleSvg color={'white'} />
                            : <CrossSvg color={'white'} />
                    }
                </div>
                <button onClick={restartMacth} className='relative overflow-hidden text-xl rounded-2xl py-2.5 px-3.5 mt-5 z-10 font-bold before:bg-black before:-z-10 before:rounded-2xl before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:hover:w-full opacity-70 hover:opacity-100'>Restart match</button>

            </section>
        </div>
    );
}

export default Alert;
