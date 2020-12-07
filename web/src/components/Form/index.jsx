{/* <AddNewCategory showModal={showModal}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <button onClick={() => history.push('/')}>Voltar</button> 
                    //VAI SER UM SVG PRA VOLTAR
               

                <div className="nav">
                    <h4 className="nav-title">New Category</h4>
                    <MdClose size={27} onClick={() => history.push('/')}/>
                </div>

                <div className="category-name">
                    <label >Category name?</label>
                    <input  name="name" placeholder="Personal" ref={register({ required: true})} />
                    {errors.name && <p style={{ color: 'red'}}>This field is required</p>}
                </div>
                
                <div className="category-color">
                    <label className="label-color">Category color:</label>
                    <input className="input-color" name="color" type="color" ref={register} defaultValue='#1299D3'/>
                </div>

                <div className="category-icon">
                    <label>Selecioe um ícone</label>
                    <button  type="button" onClick={handleModal}>Show Icons</button>
                </div>

                <input className="input-button" type="submit" value="Create"/>
            </form>
            

            {showModal && 
                <Modal handleModal={handleModal} showModal={showModal}>
                    <div className="wrapper">
                        <div className="icon" onClick={() => handleIcon(FITNESS)}>
                            <IoMdFitness size={35} />
                        </div>
                        <div className="icon" onClick={() => handleIcon(SECRET)}>
                            <IoMdLock size={35} />
                        </div>
                        <div className="icon" onClick={() => handleIcon(PERSONAL)}>
                            <IoMdPerson size={35} />
                        </div>
                        <div className="icon" onClick={() => handleIcon(NOT_SECRET)}>
                            <IoMdUnlock size={35}/>
                        </div>
                        <div className="icon" onClick={() => handleIcon(KEY)}>
                            <IoIosKey size={35}/>
                        </div>
                        <div className="icon" onClick={() => handleIcon(DOCUMENT)}>
                            <IoIosPaper size={35}/>
                        </div>
                        <div className="icon" onClick={() => handleIcon(PAYMENT)}>
                            <MdPayment size={35} />
                        </div>
                        <div className="icon" onClick={() => handleIcon(STAR)}>
                            <HiStar size={35} />
                        </div>

                    </div>
                        <button type="button" onClick={handleModal}>Select</button>
                </Modal>
                }
       
        </AddNewCategory> */}