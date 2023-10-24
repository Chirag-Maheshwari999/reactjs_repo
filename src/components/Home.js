import './home.css'
export default function Home({userName,repo,followers}) {
  return (
    <div className='mainDiv'>
        {
            userName.length===0?<h1 style={{textAlign:'center'}}>Please Search UserName</h1>:<h1 style={{textAlign:'center'}}>{userName}</h1>
        }
        {
            followers.length===0?<></>:<h3 style={{marginLeft:'15px'}}>Followers: {followers}</h3>
        }
        {
            repo.length===0?<></>:<><h3 style={{textAlign:'center'}}>Repositories</h3><hr/><br/></>
        }
        {
           repo.map((i)=>{
            return <div>
            <div style={{display:'flex',justifyContent:'space-between',margin:'2px'}}>
                <h3>{i.name}</h3> 
                <a href={`https://github.com/${userName}/${i.name}`} target='_blank'>
                    <button>Click To Go to repo</button>
                </a>
            </div>
            <hr/>
            </div>
           })
        }
    </div>
  )
}
