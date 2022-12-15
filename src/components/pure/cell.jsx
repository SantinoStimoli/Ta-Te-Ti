import React, { useContext, useRef, useState } from 'react';
import CircleSvg from '../../assets/svg/circle.svg';
import CrossSvg from '../../assets/svg/cross.svg';
import NoneSvg from '../../assets/svg/none.svg ';
import { TEAM_VALUE } from '../../models/inputValue.enum';
import { flipTurnValueContext, turnValueContext } from '../containers/board';

const Cell = ({ cell }) => {

    const turnValue = useContext(turnValueContext);
    const flipTurnValue = useContext(flipTurnValueContext);
    const abled = cell.value === TEAM_VALUE.NONE ? false : true;

    const setCellValue = () => {
        if (!abled) {
            flipTurnValue()
            cell.setValue[0](turnValue)
        }
    }

    return (
        <div>
            <input type={'checkbox'} className='hidden' id={cell.number} disabled={abled} />
            <label onClick={setCellValue} htmlFor={cell.number} className={'cell w-24 h-24 col-span-1 row-span-1 flex justify-center items-center m-4 transition-all rounded-2xl ' + (!abled ? ' hover:bg-gray-800 cursor-pointer' : undefined)} >
                {cell.value === TEAM_VALUE.CIRCLE ?
                    <CircleSvg />
                    :
                    cell.value === TEAM_VALUE.CROSS ?
                        <CrossSvg />
                        :
                        <NoneSvg />}
            </label>
        </div>
    );
}

export default Cell;
