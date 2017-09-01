import React, { Component } from 'react'

export const ApplyTags = ({tags}) => {

  return <div className="col4">
    {
      tags.length > 0 && tags.map((t, i) => {
        return <span key={i} id={t.id}>{t.text}</span>
      })
    }
  </div>
}
