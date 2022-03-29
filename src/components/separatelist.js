function ListMode() {

    const countries = ['USA', 'KENYA', 'UGANDA', 'SOUTH AFRICA', 'MALAWI', 'ITALY']
    const country=countries.map(student => <h2>{student}</h2>)

    return (

        <div>
            {

                country
            }
        </div>
    )
}
export default ListMode