function NameList() {

    const students = ['moses', 'andrew', 'Kenneth', 'Lorice', 'martin', 'wallace']

    return (

        <div>
            {

                students.map(student => <h2>{student}</h2>)
            }
        </div>
    )
}
export default NameList