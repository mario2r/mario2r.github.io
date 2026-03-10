import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faJenkins, faSwift } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Swift",
    "SwiftUI",
    "UIKit",
    "Objective-C",
    "Combine",
    "Core Data",
    "Core Animation",
    "Auto Layout",
    "Async/Await",
    "StoreKit",
    "Push Notifications",
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Xcode Cloud",
    "Fastlane",
    "TestFlight",
    "App Store Connect",
    "CocoaPods",
    "SPM",
];

const labelsThird = [
    "MVVM",
    "Clean Architecture",
    "XCTest",
    "Swift Testing",
    "Snapshot Testing",
    "SOLID",
    "Modularization",
    "Code Review",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faApple} size="3x"/>
                    <h3>iOS Development</h3>
                    <p>I design and build native iOS applications using Swift and UIKit/SwiftUI. I have deep expertise in the Apple ecosystem, from architecture patterns like MVVM and Clean Architecture to publishing on the App Store.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faJenkins} size="3x"/>
                    <h3>CI/CD & App Distribution</h3>
                    <p>I set up robust CI/CD pipelines for iOS projects using Xcode Cloud, Fastlane, and GitHub Actions to automate testing, code signing, and App Store deployment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faSwift} size="3x"/>
                    <h3>Architecture & Testing</h3>
                    <p>I design scalable, maintainable codebases following SOLID principles, modular architecture, and comprehensive testing strategies with XCTest and snapshot testing.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;