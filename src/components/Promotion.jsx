import React from 'react'

const Promotion = () => {
  return (
    <div className={`py-3 tw-bg-slate-900 bg-pattern tw-h-[314px] lg:tw-h-auto mb-4 tw-relative ${isOpen2 ? "tw-top-[20px]" : "tw-top-[315px]"} lg:tw-relative lg:tw-top-[30px] tw-duration-300 tw-transition-all`}>
  <div className="container">
    <div className="row">
      <div className="col-12">
        {/* Text */}
        <div className="text-center text-white">
          <span className="heading-xxs letter-spacing-xl">
            ⚡️ Happy Holiday Deals on Everything ⚡️
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Promotion