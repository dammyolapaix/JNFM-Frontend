import React, { FC } from 'react'
import { IMember, MaleFemalePieChart } from '../'

const MembersGraph: FC<{ members: IMember[] }> = ({ members }) => {
  return (
    <div className="my-10 shadow-md bg-white p-3">
      <h2 className="font-bold text-xl text-secondary mb-5">Graph</h2>
      <div className="grid md:grid-cols-2">
        <div className="h-96">
          <MaleFemalePieChart members={members} />
        </div>
      </div>
    </div>
  )
}

export default MembersGraph
