import './Head.css'
import React, { useState } from 'react';

const Head = () => {

    // var StrMod = '+3';

    const [formulario, setFormulario] = useState({
        strMod: 0,
        dexMod: 0,
        conMod: 0,
        intMod: 0,
        wisMod: 0,
        chaMod: 0
    })

    const handleChangeForm = (e)=>{
        setFormulario(
            {...formulario,
            [e.target.name]:Math.floor((e.target.value - 10) / 2)}
            )
    }

    const [proficiency, setProficiency] = useState({
        profiBonus: 0
    })

    const handleChangeProfi = (e) => {
        setProficiency(
            {...proficiency,
            [e.target.name]:Math.ceil(1+(e.target.value / 4))}
        )
    }

    // const [checked, setChecked] = useState();

    // const handleChangeCheck = () => {
    //     setChecked(!checked);
    // }

    const [checked, setChecked] = useState({
        checkedSST: true, checkedAth: true,
        checkedDST: true, checkedAcr: true, checkedSoH: true, checkedSte: true,
        checkedCST: true,
        checkedIST: true, checkedArc: true, checkedHis: true, checkedInv: true, checkedNat: true, checkedRel: true,
        checkedWST: true, checkedAnH: true, checkedIns: true, checkedMed: true, checkedPer: true, checkedSur: true,
        checkedAST: true, checkedDec: true, checkedInt: true, checkedPef: true, checkedPes: true
    });

    const handleChangeCheck = (e) => {
        setChecked(
            {...checked,
            [e.target.name]:!e.target.checked}
        )
    }
    // render() {

        return (
            <div>
                <h2>Hello world</h2>
                <div className='border-8 border-black'>
                    <input className='border-2 border-black w-1/6' type='text' placeholder='Character Name'/>
                    <input className='border-2 border-black w-1/6' type='text' placeholder='Class'/>
                    <input className='border-2 border-black w-1/6' 
                    type='text' 
                    placeholder='Level'
                    name='profiBonus'
                    onChange={handleChangeProfi}
                    />
                    <input className='border-2 border-black w-1/6' type='text' placeholder='Background'/>
                    <input className='border-2 border-black w-1/6' type='text' placeholder='Race'/>
                    <input className='border-2 border-black w-1/6' type='text' placeholder='Aligment'/>
                </div>

                <br></br>

                <div className='flex items-center'>
                    <div className='flex flex-col items-center justify-center w-1/4'>
                        <b><p className='text-2xl'>Armor class</p></b>
                        <input className='text-center border-4 border-black w-1/4 h-20' type='text' placeholder='AC'/>
                    </div>
                    <div className='flex flex-col items-center justify-center w-1/4'>
                        <b><p className='text-2xl'>Initiative</p></b>
                        <input className='text-center border-4 border-black w-1/4 h-20' type='text' placeholder='Initiative'/>
                    </div>
                    <div className='flex flex-col items-center justify-center w-1/4'>
                        <b><p className='text-2xl'>Movement speed</p></b>
                        <input className='text-center border-4 border-black w-1/4 h-20' type='text' placeholder='Speed'/>
                    </div>
                    <div className='flex flex-col items-center justify-center w-1/4'>
                        <b><p className='text-2xl'>Proficiency</p></b>
                        <p className='text-center text-6xl border-4 border-black w-1/4 h-20' >{proficiency.profiBonus}</p>
                    </div>
                </div>

                <br></br>

                <div className='flex items-center'>
                    <div className='w-1/6'>
                        <div className='flex flex-col items-center justify-center'>
                            <p className='text-center text-6xl border-4 border-black w-28 h-28' type='text' placeholder='Strength Modifier'>{formulario.strMod}</p>
                            <div >
                                <input className='text-center border-2 border-black w-16 h-10' 
                                type='text' 
                                placeholder='Strength'
                                name="strMod"
                                onChange={handleChangeForm}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='w-1/6'>
                        <div className='flex flex-col items-center justify-center'>
                            <p className='text-center text-6xl border-4 border-black w-28 h-28' type='text' placeholder='Dexterity Modifier'>{formulario.dexMod}</p>
                            <div className='static'>
                                <input className='text-center border-2 border-black w-16 h-10' 
                                type='text' 
                                placeholder='Dexterity' 
                                name="dexMod"
                                onChange={handleChangeForm}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='w-1/6'>
                        <div className='flex flex-col items-center justify-center'>
                            <p className='text-center text-6xl border-4 border-black w-28 h-28' type='text' placeholder='Constitution Modifier'>{formulario.conMod}</p>
                            <div >
                                <input className='text-center border-2 border-black w-16 h-10' 
                                type='text' 
                                placeholder='Constitution'
                                name="conMod"
                                onChange={handleChangeForm}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='w-1/6'>
                        <div className='flex flex-col items-center justify-center'>
                            <p className='text-center text-6xl border-4 border-black w-28 h-28' type='text' placeholder='Intelligence Modifier'>{formulario.intMod}</p>
                            <div className='static'>
                                <input className='text-center border-2 border-black w-16 h-10' 
                                type='text' 
                                placeholder='Intelligence' 
                                name="intMod"
                                onChange={handleChangeForm}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='w-1/6'>
                        <div className='flex flex-col items-center justify-center'>
                            <p className='text-center text-6xl border-4 border-black w-28 h-28' type='text' placeholder='Wisdom Modifier'>{formulario.wisMod}</p>
                            <div >
                                <input className='text-center border-2 border-black w-16 h-10' 
                                type='text' 
                                placeholder='Wisdom' 
                                name="wisMod"
                                onChange={handleChangeForm}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='w-1/6'>
                        <div className='flex flex-col items-center justify-center'>
                            <p className='text-center text-6xl border-4 border-black w-28 h-28' type='text' placeholder='Charisma Modifier'>{formulario.chaMod}</p>
                            <div className='static'>
                                <input className='text-center border-2 border-black w-16 h-10' 
                                type='text' 
                                placeholder='Charisma' 
                                name="chaMod"
                                onChange={handleChangeForm}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <br></br>

                <div className='flex'>
                    <div className='flex flex-col items-start border-4 border-black w-1/6'>
                        <label className='text-xl'>
                            <input type='checkbox'
                            name='checkedSST'
                            value={checked.checkedSST}
                            onChange={handleChangeCheck}
                            />
                            <b>{checked.checkedSST ? formulario.strMod : formulario.strMod + proficiency.profiBonus}</b> Saving Throw
                        </label>
                        <label className='text-xl'>
                            <input type='checkbox'
                            name='checkedAth'
                            value={checked.checkedAth}
                            onChange={handleChangeCheck}
                            />
                            <b>{checked.checkedAth ? formulario.strMod : formulario.strMod + proficiency.profiBonus}</b> Athletics
                        </label>
                    </div>
                    <div className='flex flex-col items-start border-4 border-black w-1/6'>
                        <label className='text-xl'>
                            <input type='checkbox'
                            name='checkedDST'
                            value={checked.checkedDST}
                            onChange={handleChangeCheck}
                            />
                            <b>{checked.checkedDST ? formulario.dexMod : formulario.dexMod + proficiency.profiBonus}</b> Saving Throw
                        </label>
                        <label className='text-xl'>
                            <input type='checkbox'
                            name='checkedAcr'
                            value={checked.checkedAcr}
                            onChange={handleChangeCheck}
                            />
                            <b>{checked.checkedAcr ? formulario.dexMod : formulario.dexMod + proficiency.profiBonus}</b> Acrobatics
                        </label>
                        <label className='text-xl'>
                            <input type='checkbox'
                            name='checkedSoH'
                            value={checked.checkedSoH}
                            onChange={handleChangeCheck}
                            />
                            <b>{checked.checkedSoH ? formulario.dexMod : formulario.dexMod + proficiency.profiBonus}</b> Sleight of Hand
                        </label>
                        <label className='text-xl'>
                            <input type='checkbox'
                            name='checkedSte'
                            value={checked.checkedSte}
                            onChange={handleChangeCheck}
                            />
                            <b>{checked.checkedSte ? formulario.dexMod : formulario.dexMod + proficiency.profiBonus}</b> Stealth
                        </label>
                    </div>
                    <div className='flex flex-col items-start border-4 border-black w-1/6'>
                        <label className='text-xl'>
                            <input type='checkbox'
                            name='checkedCST'
                            value={checked.checkedCST}
                            onChange={handleChangeCheck}
                            />
                            <b>{checked.checkedCST ? formulario.conMod : formulario.conMod + proficiency.profiBonus}</b> Saving Throw
                        </label>
                    </div>
                    <div className='flex flex-col items-start border-4 border-black w-1/6'>
                        <label className='text-xl'>
                            <input type='checkbox'
                            name='checkedIST'
                            value={checked.checkedIST}
                            onChange={handleChangeCheck}
                            />
                            <b>{checked.checkedIST ? formulario.intMod : formulario.intMod + proficiency.profiBonus}</b> Saving Throw
                        </label>
                        <label className='text-xl'>
                            <input type='checkbox'
                            name='checkedArc'
                            value={checked.checkedArc}
                            onChange={handleChangeCheck}
                            />
                            <b>{checked.checkedArc ? formulario.intMod : formulario.intMod + proficiency.profiBonus}</b> Arcana
                        </label>
                        <label className='text-xl'>
                            <input type='checkbox'
                            name='checkedHis'
                            value={checked.checkedHis}
                            onChange={handleChangeCheck}
                            />
                            <b>{checked.checkedHis ? formulario.intMod : formulario.intMod + proficiency.profiBonus}</b> History
                        </label>
                        <label className='text-xl'>
                            <input type='checkbox'
                            name='checkedInv'
                            value={checked.checkedInv}
                            onChange={handleChangeCheck}
                            />
                            <b>{checked.checkedInv ? formulario.intMod : formulario.intMod + proficiency.profiBonus}</b> Investigation
                        </label>
                        <label className='text-xl'>
                            <input type='checkbox'
                            name='checkedNat'
                            value={checked.checkedNat}
                            onChange={handleChangeCheck}
                            />
                            <b>{checked.checkedNat ? formulario.intMod : formulario.intMod + proficiency.profiBonus}</b> Nature
                        </label>
                        <label className='text-xl'>
                            <input type='checkbox'
                            name='checkedRel'
                            value={checked.checkedRel}
                            onChange={handleChangeCheck}
                            />
                            <b>{checked.checkedRel ? formulario.intMod : formulario.intMod + proficiency.profiBonus}</b> Religion
                        </label>
                    </div>
                    <div className='flex flex-col items-start border-4 border-black w-1/6'>
                        <label className='text-xl'>
                            <input type='checkbox'
                            name='checkedWST'
                            value={checked.checkedWST}
                            onChange={handleChangeCheck}
                            />
                            <b>{checked.checkedWST ? formulario.wisMod : formulario.wisMod + proficiency.profiBonus}</b> Saving Throw
                        </label>
                        <label className='text-xl'>
                            <input type='checkbox'
                            name='checkedAnH'
                            value={checked.checkedAnH}
                            onChange={handleChangeCheck}
                            />
                            <b>{checked.checkedAnH ? formulario.wisMod : formulario.wisMod + proficiency.profiBonus}</b> Animal Handling
                        </label>
                        <label className='text-xl'>
                            <input type='checkbox'
                            name='checkedIns'
                            value={checked.checkedIns}
                            onChange={handleChangeCheck}
                            />
                            <b>{checked.checkedIns ? formulario.wisMod : formulario.wisMod + proficiency.profiBonus}</b> Insight
                        </label>
                        <label className='text-xl'>
                            <input type='checkbox'
                            name='checkedMed'
                            value={checked.checkedMed}
                            onChange={handleChangeCheck}
                            />
                            <b>{checked.checkedMed ? formulario.wisMod : formulario.wisMod + proficiency.profiBonus}</b> Medicine
                        </label>
                        <label className='text-xl'>
                            <input type='checkbox'
                            name='checkedPer'
                            value={checked.checkedPer}
                            onChange={handleChangeCheck}
                            />
                            <b>{checked.checkedPer ? formulario.wisMod : formulario.wisMod + proficiency.profiBonus}</b> Perception
                        </label>
                        <label className='text-xl'>
                            <input type='checkbox'
                            name='checkedSur'
                            value={checked.checkedSur}
                            onChange={handleChangeCheck}
                            />
                            <b>{checked.checkedSur ? formulario.wisMod : formulario.wisMod + proficiency.profiBonus}</b> Survival
                        </label>
                    </div>
                    <div className='flex flex-col items-start border-4 border-black w-1/6'>
                        <label className='text-xl'>
                            <input type='checkbox'
                            name='checkedAST'
                            value={checked.checkedAST}
                            onChange={handleChangeCheck}
                            />
                            <b>{checked.checkedAST ? formulario.chaMod : formulario.chaMod + proficiency.profiBonus}</b> Saving Throw
                        </label>
                        <label className='text-xl'>
                            <input type='checkbox'
                            name='checkedDec'
                            value={checked.checkedDec}
                            onChange={handleChangeCheck}
                            />
                            <b>{checked.checkedDec ? formulario.chaMod : formulario.chaMod + proficiency.profiBonus}</b> Deception
                        </label>
                        <label className='text-xl'>
                            <input type='checkbox'
                            name='checkedInt'
                            value={checked.checkedInt}
                            onChange={handleChangeCheck}
                            />
                            <b>{checked.checkedInt ? formulario.chaMod : formulario.chaMod + proficiency.profiBonus}</b> Intimidation
                        </label>
                        <label className='text-xl'>
                            <input type='checkbox'
                            name='checkedPef'
                            value={checked.checkedPef}
                            onChange={handleChangeCheck}
                            />
                            <b>{checked.checkedPef ? formulario.chaMod : formulario.chaMod + proficiency.profiBonus}</b> Performance
                        </label>
                        <label className='text-xl'>
                            <input type='checkbox'
                            name='checkedPes'
                            value={checked.checkedPes}
                            onChange={handleChangeCheck}
                            />
                            <b>{checked.checkedPes ? formulario.chaMod : formulario.chaMod + proficiency.profiBonus}</b> Persuasion
                        </label>
                    </div>
                </div>
            </div>
        );

    // }
}

export default Head;