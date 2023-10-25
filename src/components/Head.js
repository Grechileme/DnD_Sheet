import './Head.css'
import React, { useState } from 'react';

const Head = () => {

    // var StrMod = '+3';

    const test = 'blablabla'

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
                {/* <h2>Hello world</h2> */}
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
                            <b><p className='text-2xl'>Strength</p></b>
                            <p className='text-center text-6xl border-4 border-black w-28 h-28'>{formulario.strMod}</p>
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
                            <b><p className='text-2xl'>Dexterity</p></b>
                            <p className='text-center text-6xl border-4 border-black w-28 h-28'>{formulario.dexMod}</p>
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
                            <b><p className='text-2xl'>Constitution</p></b>
                            <p className='text-center text-6xl border-4 border-black w-28 h-28'>{formulario.conMod}</p>
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
                            <b><p className='text-2xl'>Intelligence</p></b>
                            <p className='text-center text-6xl border-4 border-black w-28 h-28'>{formulario.intMod}</p>
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
                            <b><p className='text-2xl'>Wisdom</p></b>
                            <p className='text-center text-6xl border-4 border-black w-28 h-28'>{formulario.wisMod}</p>
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
                            <b><p className='text-2xl'>Charisma</p></b>
                            <p className='text-center text-6xl border-4 border-black w-28 h-28'>{formulario.chaMod}</p>
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
                        <label className='text-xl flex items-center ml-1 mt-1'>
                            <input className='h-5 w-5' type='checkbox'
                            name='checkedSST'
                            value={checked.checkedSST}
                            onChange={handleChangeCheck}
                            />
                            <b className='ml-2 mr-2'>{checked.checkedSST ? formulario.strMod : formulario.strMod + proficiency.profiBonus}</b> Saving Throw
                        </label>
                        <label className='text-xl flex items-center ml-1'>
                            <input className='h-5 w-5' type='checkbox'
                            name='checkedAth'
                            value={checked.checkedAth}
                            onChange={handleChangeCheck}
                            />
                            <b className='ml-2 mr-2'>{checked.checkedAth ? formulario.strMod : formulario.strMod + proficiency.profiBonus}</b> Athletics
                        </label>
                    </div>
                    <div className='flex flex-col items-start border-4 border-black w-1/6'>
                        <label className='text-xl flex items-center ml-1 mt-1'>
                            <input className='h-5 w-5' type='checkbox'
                            name='checkedDST'
                            value={checked.checkedDST}
                            onChange={handleChangeCheck}
                            />
                            <b className='ml-2 mr-2'>{checked.checkedDST ? formulario.dexMod : formulario.dexMod + proficiency.profiBonus}</b> Saving Throw
                        </label>
                        <label className='text-xl flex items-center ml-1'>
                            <input className='h-5 w-5' type='checkbox'
                            name='checkedAcr'
                            value={checked.checkedAcr}
                            onChange={handleChangeCheck}
                            />
                            <b className='ml-2 mr-2'>{checked.checkedAcr ? formulario.dexMod : formulario.dexMod + proficiency.profiBonus}</b> Acrobatics
                        </label>
                        <label className='text-xl flex items-center ml-1'>
                            <input className='h-5 w-5' type='checkbox'
                            name='checkedSoH'
                            value={checked.checkedSoH}
                            onChange={handleChangeCheck}
                            />
                            <b className='ml-2 mr-2'>{checked.checkedSoH ? formulario.dexMod : formulario.dexMod + proficiency.profiBonus}</b> Sleight of Hand
                        </label>
                        <label className='text-xl flex items-center ml-1'>
                            <input className='h-5 w-5' type='checkbox'
                            name='checkedSte'
                            value={checked.checkedSte}
                            onChange={handleChangeCheck}
                            />
                            <b className='ml-2 mr-2'>{checked.checkedSte ? formulario.dexMod : formulario.dexMod + proficiency.profiBonus}</b> Stealth
                        </label>
                    </div>
                    <div className='flex flex-col items-start border-4 border-black w-1/6'>
                        <label className='text-xl flex items-center ml-1 mt-1'>
                            <input className='h-5 w-5' type='checkbox'
                            name='checkedCST'
                            value={checked.checkedCST}
                            onChange={handleChangeCheck}
                            />
                            <b className='ml-2 mr-2'>{checked.checkedCST ? formulario.conMod : formulario.conMod + proficiency.profiBonus}</b> Saving Throw
                        </label>
                    </div>
                    <div className='flex flex-col items-start border-4 border-black w-1/6'>
                        <label className='text-xl flex items-center ml-1 mt-1'>
                            <input className='h-5 w-5' type='checkbox'
                            name='checkedIST'
                            value={checked.checkedIST}
                            onChange={handleChangeCheck}
                            />
                            <b className='ml-2 mr-2'>{checked.checkedIST ? formulario.intMod : formulario.intMod + proficiency.profiBonus}</b> Saving Throw
                        </label>
                        <label className='text-xl flex items-center ml-1'>
                            <input className='h-5 w-5' type='checkbox'
                            name='checkedArc'
                            value={checked.checkedArc}
                            onChange={handleChangeCheck}
                            />
                            <b className='ml-2 mr-2'>{checked.checkedArc ? formulario.intMod : formulario.intMod + proficiency.profiBonus}</b> Arcana
                        </label>
                        <label className='text-xl flex items-center ml-1'>
                            <input className='h-5 w-5' type='checkbox'
                            name='checkedHis'
                            value={checked.checkedHis}
                            onChange={handleChangeCheck}
                            />
                            <b className='ml-2 mr-2'>{checked.checkedHis ? formulario.intMod : formulario.intMod + proficiency.profiBonus}</b> History
                        </label>
                        <label className='text-xl flex items-center ml-1'>
                            <input className='h-5 w-5' type='checkbox'
                            name='checkedInv'
                            value={checked.checkedInv}
                            onChange={handleChangeCheck}
                            />
                            <b className='ml-2 mr-2'>{checked.checkedInv ? formulario.intMod : formulario.intMod + proficiency.profiBonus}</b> Investigation
                        </label>
                        <label className='text-xl flex items-center ml-1'>
                            <input className='h-5 w-5' type='checkbox'
                            name='checkedNat'
                            value={checked.checkedNat}
                            onChange={handleChangeCheck}
                            />
                            <b className='ml-2 mr-2'>{checked.checkedNat ? formulario.intMod : formulario.intMod + proficiency.profiBonus}</b> Nature
                        </label>
                        <label className='text-xl flex items-center ml-1'>
                            <input className='h-5 w-5' type='checkbox'
                            name='checkedRel'
                            value={checked.checkedRel}
                            onChange={handleChangeCheck}
                            />
                            <b className='ml-2 mr-2'>{checked.checkedRel ? formulario.intMod : formulario.intMod + proficiency.profiBonus}</b> Religion
                        </label>
                    </div>
                    <div className='flex flex-col items-start border-4 border-black w-1/6'>
                        <label className='text-xl flex items-center ml-1 mt-1'>
                            <input className='h-5 w-5' type='checkbox'
                            name='checkedWST'
                            value={checked.checkedWST}
                            onChange={handleChangeCheck}
                            />
                            <b className='ml-2 mr-2'>{checked.checkedWST ? formulario.wisMod : formulario.wisMod + proficiency.profiBonus}</b> Saving Throw
                        </label>
                        <label className='text-xl flex items-center ml-1'>
                            <input className='h-5 w-5' type='checkbox'
                            name='checkedAnH'
                            value={checked.checkedAnH}
                            onChange={handleChangeCheck}
                            />
                            <b className='ml-2 mr-2'>{checked.checkedAnH ? formulario.wisMod : formulario.wisMod + proficiency.profiBonus}</b> Animal Handling
                        </label>
                        <label className='text-xl flex items-center ml-1'>
                            <input className='h-5 w-5' type='checkbox'
                            name='checkedIns'
                            value={checked.checkedIns}
                            onChange={handleChangeCheck}
                            />
                            <b className='ml-2 mr-2'>{checked.checkedIns ? formulario.wisMod : formulario.wisMod + proficiency.profiBonus}</b> Insight
                        </label>
                        <label className='text-xl flex items-center ml-1'>
                            <input className='h-5 w-5' type='checkbox'
                            name='checkedMed'
                            value={checked.checkedMed}
                            onChange={handleChangeCheck}
                            />
                            <b className='ml-2 mr-2'>{checked.checkedMed ? formulario.wisMod : formulario.wisMod + proficiency.profiBonus}</b> Medicine
                        </label>
                        <label className='text-xl flex items-center ml-1'>
                            <input className='h-5 w-5' type='checkbox'
                            name='checkedPer'
                            value={checked.checkedPer}
                            onChange={handleChangeCheck}
                            />
                            <b className='ml-2 mr-2'>{checked.checkedPer ? formulario.wisMod : formulario.wisMod + proficiency.profiBonus}</b> Perception
                        </label>
                        <label className='text-xl flex items-center ml-1'>
                            <input className='h-5 w-5' type='checkbox'
                            name='checkedSur'
                            value={checked.checkedSur}
                            onChange={handleChangeCheck}
                            />
                            <b className='ml-2 mr-2'>{checked.checkedSur ? formulario.wisMod : formulario.wisMod + proficiency.profiBonus}</b> Survival
                        </label>
                    </div>
                    <div className='flex flex-col items-start border-4 border-black w-1/6'>
                        <label className='text-xl flex items-center ml-1 mt-1'>
                            <input className='h-5 w-5' type='checkbox'
                            name='checkedAST'
                            value={checked.checkedAST}
                            onChange={handleChangeCheck}
                            />
                            <b className='ml-2 mr-2'>{checked.checkedAST ? formulario.chaMod : formulario.chaMod + proficiency.profiBonus}</b> Saving Throw
                        </label>
                        <label className='text-xl flex items-center ml-1'>
                            <input className='h-5 w-5' type='checkbox'
                            name='checkedDec'
                            value={checked.checkedDec}
                            onChange={handleChangeCheck}
                            />
                            <b className='ml-2 mr-2'>{checked.checkedDec ? formulario.chaMod : formulario.chaMod + proficiency.profiBonus}</b> Deception
                        </label>
                        <label className='text-xl flex items-center ml-1'>
                            <input className='h-5 w-5' type='checkbox'
                            name='checkedInt'
                            value={checked.checkedInt}
                            onChange={handleChangeCheck}
                            />
                            <b className='ml-2 mr-2'>{checked.checkedInt ? formulario.chaMod : formulario.chaMod + proficiency.profiBonus}</b> Intimidation
                        </label>
                        <label className='text-xl flex items-center ml-1'>
                            <input className='h-5 w-5' type='checkbox'
                            name='checkedPef'
                            value={checked.checkedPef}
                            onChange={handleChangeCheck}
                            />
                            <b className='ml-2 mr-2'>{checked.checkedPef ? formulario.chaMod : formulario.chaMod + proficiency.profiBonus}</b> Performance
                        </label>
                        <label className='text-xl flex items-center ml-1'>
                            <input className='h-5 w-5' type='checkbox'
                            name='checkedPes'
                            value={checked.checkedPes}
                            onChange={handleChangeCheck}
                            />
                            <b className='ml-2 mr-2'>{checked.checkedPes ? formulario.chaMod : formulario.chaMod + proficiency.profiBonus}</b> Persuasion
                        </label>
                    </div>
                </div>
                <br></br>
                <div className='mx-auto grid grid-cols-3 grid-rows-3 gap-4 place-items-start justify-items-center w-3/4'>
                    <div>
                        <div className='text-center text-2xl'>
                            <b>Max Hit Point</b>
                        </div>
                        <div className='border-4 border-black'>
                            <input className='text-center' type='text' placeholder='Max Hit Point'></input>
                        </div>
                    </div>

                    <div className='row-span-2'>
                        <div className='text-center text-2xl'>
                            <b>Current Hit Points</b>
                        </div>
                        <div className='border-4 border-black h-28'>
                            <input className='text-center w-full h-full' type='text' placeholder='Current Hit Points'></input>
                        </div>
                    </div>

                    <div>
                        <div className='text-center text-2xl'>
                            <b>Total Hit Point</b>
                        </div>
                        <div className='border-4 border-black col-start-1'>
                            <input className='text-center' type='text' placeholder='Total Hit Dice'></input>
                        </div>
                    </div>

                    <div>
                        <div className='text-center text-2xl'>
                            <b>Hit Dice</b>
                        </div>
                        <div className='border-4 border-black col-start-1 row-start-3'>
                            <input className='text-center' type='text' placeholder='Hit Dice'></input>
                        </div>
                    </div>

                    <div>
                        <div className='text-center text-2xl'>
                            <b>Temp. Hit Points</b>
                        </div>
                        <div className='border-4 border-black col-start-2'>
                            <input className='text-center' type='text' placeholder='Temporary Hit Points'></input>
                        </div>
                    </div>

                    <div className='col-start-3 row-start-1'>
                        <p className='text-2xl'><b>Death Saves</b></p>
                    </div>

                    <div className='col-start-3 row-start-2'>
                        <div className='mr-2 text-2xl'>
                            <b>Successes</b>
                        </div>
                        <div className='flex justify-center items-center'>
                            <input className='mr-1 h-5 w-5' type='checkbox'></input>
                            <input className='mr-1 h-5 w-5' type='checkbox'></input>
                            <input className='mr-1 h-5 w-5' type='checkbox'></input>
                        </div>
                    </div>

                    <div className='col-start-3 row-start-3'>
                        <p className='mr-2 text-2xl'><b>Failures</b></p>
                        <div className='flex justify-center items-center'>
                            <input className='mr-1 h-5 w-5' type='checkbox'></input>
                            <input className='mr-1 h-5 w-5' type='checkbox'></input>
                            <input className='mr-1 h-5 w-5' type='checkbox'></input>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className='flex'>
                    <div className='m-4 w-1/3 h-96 border-4 border-black overflow-auto flex flex-col justify-center items-center'>
                        <div className='flex'>
                            <div className='mx-auto my-1 border-4 border-black w-1/3'>
                                <input className='w-full text-center' type='text'></input>
                            </div>
                            <div className='mx-auto my-1 border-4 border-black w-1/5'>
                                <input className='w-full text-center' type='text'></input>
                            </div>
                            <div className='mx-auto my-1 border-4 border-black w-1/3'>
                                <input className='w-full text-center' type='text'></input>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='mx-auto my-1 border-4 border-black w-1/3'>
                                <input className='w-full text-center' type='text'></input>
                            </div>
                            <div className='mx-auto my-1 border-4 border-black w-1/5'>
                                <input className='w-full text-center' type='text'></input>
                            </div>
                            <div className='mx-auto my-1 border-4 border-black w-1/3'>
                                <input className='w-full text-center' type='text'></input>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='mx-auto my-1 border-4 border-black w-1/3'>
                                <input className='w-full text-center' type='text'></input>
                            </div>
                            <div className='mx-auto my-1 border-4 border-black w-1/5'>
                                <input className='w-full text-center' type='text'></input>
                            </div>
                            <div className='mx-auto my-1 border-4 border-black w-1/3'>
                                <input className='w-full text-center' type='text'></input>
                            </div>
                        </div>
                        
                        <textarea className='m-1 resize-none w-11/12 h-60'></textarea>
                    </div>
                    <div className='m-4 w-2/3 h-96 border-4 border-black overflow-auto break-words'>
                        <p>{test}</p>
                    </div>
                </div>
            </div>
        );

    // }
}

export default Head;