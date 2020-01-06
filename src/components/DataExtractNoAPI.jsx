//jshint esversion: 6

import React from "react";
import Button from "./Button";
import Image from "./Image";



var data = require("./results.json");
var jobs = data["jobs-internships"];
console.log(jobs);

function DataExtractNoAPI(){


      return(
        <tbody>
          {jobs.map(job =>
            (

            <tr key={job.position} className="listing">

            <td> <Image /> </td>
            <td> {job.position} </td>
            <td> {job.type} </td>
            <td> <a href={job.link} target="_blank" rel="noopener noreferrer"> <Button name="Apply Now"/></a> </td>

            </tr>
          ))}
        </tbody>
      );
}

export default DataExtractNoAPI;
