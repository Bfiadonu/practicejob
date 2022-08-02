import React from 'react'


export default function Job({ job}) {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img className="companyLogo" src={job.company_logo} alt={job.title} />
      </div>
      <div className='cocktail-footer'>
        <h3 className="title"><a href="#">{job.title}</a></h3>
        <h4 className="companyName">{job.company_name}</h4>
        <p className="salary">{job.salary}</p>
       <p className="description" dangerouslySetInnerHTML={{ __html:job.description }} />
        <p className="jobType">{job.job_type}</p>
        <p className="location">{job.candidate_required_location}</p>
        
      </div>
    </article>
  )
}