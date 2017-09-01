import React, { Component } from 'react'

export const TagList = ({tags, handler}) => {
  tags = tags || []
  return <div className="tags">
    {
      tags.length > 0 && tags.map((t, i) => {
        return <span key={i}>{t.text}<i id={t.id} onClick={handler}>x</i></span>
      })
    }
  </div>
}
