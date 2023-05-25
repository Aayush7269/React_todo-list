import React from 'react'

export const TableList = () => {
  return (
    <div>
    <div class="row mt-5">
          <div class="col-md">
            <h3 class="text-center">Task Entry List</h3>
            <hr />
            <table class="table table-striped table-hover border">
              <tbody id="entry"></tbody>
            </table>
          </div>

    
          <div class="col-md">
            <h3 class="text-center">Bad List</h3>
            <hr />
            <table class="table table-striped table-hover border">
              <tbody id="bad"></tbody>
            </table>
            <p>
              Total hrs you could have saved = <span id="badTotal">0</span> hr
            </p>
          </div>
        </div>


    </div>
  )
}
