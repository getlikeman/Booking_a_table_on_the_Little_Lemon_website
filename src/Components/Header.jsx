export default function Header() {
    return (
        <>
            <header className='container-fluid  clearfix w-auto p-3 bg-dark fixed-top '>
                <img src="./Asset%209@4x.png" className={'img-fluid mx-2'} alt="logo" width={'24px'}/>
                <nav className='float-end  align-items-center mt-2 '>
                    <ul className={'nav row'}>
                        <li className='col-auto nav-item'><a href={'#'}>Home</a></li>
                        <li className={'col-auto nav-item'}><a href={'#'}>Menu</a></li>
                        <li className={'col-auto nav-item'}><a href={'#'}>About us</a></li>
                    </ul>
                </nav>

            </header>
        </>
    )
}
