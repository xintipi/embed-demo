'use client'

import { useState } from "react";

function ChannelsInput() {
    return (
        <div>
            <label className="block mb-1">What channels do you use?</label>
            <div className="flex flex-wrap gap-2">
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-l">Email</button>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-r">Email and SMS</button>
            </div>
        </div>
    );
}

function NumericInput({ label, value, onChange, prefix }) {
    return (
        <div>
            <label className="block mb-1">{label}</label>
            <div className={`flex ${prefix ? "items-center" : ""}`}>
                {prefix && (
                    <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-l">{prefix}</span>
                )}
                <input
                    className={`w-full border border-gray-300 rounded ${prefix ? "rounded-r" : ""} p-2`}
                    type="number"
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                />
            </div>
        </div>
    );
}

function RoiForm({
                     activeProfiles,
                     setActiveProfiles,
                     webVisitors,
                     setWebVisitors,
                     orderValue,
                     setOrderValue,
                     ordersPerMonth,
                     setOrdersPerMonth,
                     campaignsPerMonth,
                     setCampaignsPerMonth,
                     recipients,
                     setRecipients,
                     smsMessages,
                     setSmsMessages,
                 }) {
    return (
        <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <ChannelsInput />
                <NumericInput
                    label="# of active profiles*"
                    value={activeProfiles}
                    onChange={setActiveProfiles}
                />
                <NumericInput
                    label="New web visitors/month*"
                    value={webVisitors}
                    onChange={setWebVisitors}
                />
                <NumericInput
                    label="Average order value*"
                    value={orderValue}
                    onChange={setOrderValue}
                    prefix="$"
                />
                <NumericInput
                    label="Average # of orders per customer per month*"
                    value={ordersPerMonth}
                    onChange={setOrdersPerMonth}
                />
                <NumericInput
                    label="Campaigns sent per month (email and SMS)*"
                    value={campaignsPerMonth}
                    onChange={setCampaignsPerMonth}
                />
                <NumericInput
                    label="Recipients who receive an automated flow each month*"
                    value={recipients}
                    onChange={setRecipients}
                />
                <NumericInput
                    label="SMS messages per month*"
                    value={smsMessages}
                    onChange={setSmsMessages}
                />
            </div>
            <button className="bg-black text-white px-4 py-2 rounded">Estimate your ROI</button>
        </form>
    );
}

function RoiSummary() {
    return (
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Your estimated ROI with Klaviyo</h2>
            <p className="text-4xl font-bold text-purple-500 mb-2">448x</p>
            <p className="text-lg mb-4">per year</p>
            <h3 className="text-md font-semibold mb-2">See where your revenue is coming from:</h3>
            <ul className="mb-4">
                <li className="flex justify-between mb-2">
                    <span>New subscribers</span>
                    <span>$180,600</span>
                </li>
                <li className="flex justify-between mb-2">
                    <span>Campaigns</span>
                    <span>$3,000</span>
                </li>
                <li className="flex justify-between mb-2">
                    <span>Automated flows</span>
                    <span>$5,130</span>
                </li>
            </ul>
            <p className="text-sm text-gray-500 mb-4">
                Sign up to get started or chat with sales about your ROI results.
            </p>
            <div className="flex">
                <button className="bg-black text-white px-4 py-2 rounded mr-2">Get started</button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Talk to sales</button>
            </div>
        </div>
    );
}

const RoiCalculator = () => {
    const [activeProfiles, setActiveProfiles] = useState("");
    const [webVisitors, setWebVisitors] = useState("");
    const [orderValue, setOrderValue] = useState("");
    const [ordersPerMonth, setOrdersPerMonth] = useState("");
    const [campaignsPerMonth, setCampaignsPerMonth] = useState("");
    const [recipients, setRecipients] = useState("");
    const [smsMessages, setSmsMessages] = useState("");

    return (
        <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="col-span-2">
                    <h2 className="text-lg font-semibold mb-4">Tell us about your brand</h2>
                    <RoiForm
                        activeProfiles={activeProfiles}
                        setActiveProfiles={setActiveProfiles}
                        webVisitors={webVisitors}
                        setWebVisitors={setWebVisitors}
                        orderValue={orderValue}
                        setOrderValue={setOrderValue}
                        ordersPerMonth={ordersPerMonth}
                        setOrdersPerMonth={setOrdersPerMonth}
                        campaignsPerMonth={campaignsPerMonth}
                        setCampaignsPerMonth={setCampaignsPerMonth}
                        recipients={recipients}
                        setRecipients={setRecipients}
                        smsMessages={smsMessages}
                        setSmsMessages={setSmsMessages}
                    />
                </div>
                <RoiSummary />
            </div>
        </div>
    );
}

export default RoiCalculator;
