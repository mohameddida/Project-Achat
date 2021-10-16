import React from 'react'

const ContactFooter = () => {
    return (
        <div className="shadow overflow-hidden text-gray-50">
            <label class="label">
                <span class="label-text text-">Enter your email address</span>
            </label>
            <div class="relative">
                <input type="text" placeholder="username@site.com" class="w-full pr-16 input input-bordered" />
                <button class="absolute top-0 right-0 rounded-l-none btn btn-primary">Subscribe</button>
            </div>
        </div>
    )
}

export default ContactFooter
