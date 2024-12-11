
const FileImg= ()=>{


    return(
        <section className="border-b pt-[60px] pb-3">
            <div className="w-full flex flex-col items-center">
                <p className="text-[#616161] font-semibold">Share your setup with</p>
                <h5 className="text-[35px] font-bold">#FuniroFurniture</h5>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '2fr 2fr 2fr 2fr 2fr', gridTemplateRows: '1.5fr 9fr 2fr 4fr 2fr .4fr', height: '55vmax', gap: '2%'}}>
                    <img style={{gridRow: '1/3', gridColumn: '1', height: '100%'}} src={'https://primertesteryan.s3.us-east-2.amazonaws.com/Documents/Rectangle36.png'}/>
                    <img style={{gridRow: '2/3', gridColumn: '1/3', marginLeft: '18.5%', height: '100%', width: '90%'}} src={'https://primertesteryan.s3.us-east-2.amazonaws.com/Documents/Rectangle38.png'}/>
                    <img style={{gridRow: '3/6', gridColumn: '1', height: '100%'}} src={'https://primertesteryan.s3.us-east-2.amazonaws.com/Documents/Rectangle37.png'}/>
                    <img style={{gridRow: '3/5', gridColumn: '2/4', height: '100%', width: '72%', marginLeft: '-16%'}} src={'https://primertesteryan.s3.us-east-2.amazonaws.com/Documents/Rectangle39.png'}/>
                    <img style={{gridRow: '2/5', gridColumn: '3', height: '70%', marginTop: '35%', marginLeft: '13%'}} src={'https://primertesteryan.s3.us-east-2.amazonaws.com/Documents/Rectangle40.png'}/>
                    <img style={{gridRow: '3/6', gridColumn: '4', height: '80%', marginTop: '15%', marginLeft: '9%'}} src={'https://primertesteryan.s3.us-east-2.amazonaws.com/Documents/Rectangle41.png'}/>
                    <img style={{gridRow: '2/4', gridColumn: '4', height: '81%', marginTop: '12%', marginLeft: '9%'}} src={'https://primertesteryan.s3.us-east-2.amazonaws.com/Documents/Rectangle43.png'}/>
                    <img style={{gridRow: '3/5', gridColumn: '5',height: '90%', width: '85%', marginTop: '14%',  marginLeft: '-22%'}} src={'https://primertesteryan.s3.us-east-2.amazonaws.com/Documents/Rectangle44.png'}/>
                    <img style={{gridRow: '1/4', gridColumn: '5', height: '90%', width: '95%', marginLeft: '5%'}} src={'https://primertesteryan.s3.us-east-2.amazonaws.com/Documents/Rectangle45.png'}/>
            </div>
        </section>
    )
}

export default FileImg