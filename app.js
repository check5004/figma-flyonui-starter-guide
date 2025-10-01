// Current language state
let currentLang = 'ja';

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
        updateActiveButton(currentLang);
    }
    
    renderContent(currentLang);
});

// Switch language function
function switchLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);
        updateActiveButton(lang);
        renderContent(lang);
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }
}

// Update active button
function updateActiveButton(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
}

// Render content
function renderContent(lang) {
    const t = translations[lang];
    const app = document.getElementById('app');
    
    // Update page title
    document.getElementById('page-title').textContent = t.hero_title + ' | ' + t.hero_subtitle;
    
    app.innerHTML = `
        <div class="hero">
            <h1>${t.hero_title}</h1>
            <p class="subtitle">${t.hero_subtitle}</p>
            <div class="target">
                ${t.hero_target}
            </div>
            <div>
                <span class="badge">${t.badge_flyonui}</span>
                <span class="badge">${t.badge_hybrid}</span>
                <span class="badge">${t.badge_atomic}</span>
                <span class="badge">${t.badge_beginner}</span>
                <span class="badge">${t.badge_ai}</span>
            </div>
            <div style="margin-top: 30px;">
                <a href="https://github.com/check5004/figma-flyonui-starter-guide" target="_blank" class="github-button">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style="margin-right: 8px;">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    ${t.github_button}
                </a>
            </div>
        </div>
        
        <nav>
            <ul>
                <li><a href="#intro">${t.nav_intro}</a></li>
                <li><a href="#basics">${t.nav_basics}</a></li>
                <li><a href="#hybrid">${t.nav_hybrid}</a></li>
                <li><a href="#plugins">${t.nav_plugins}</a></li>
                <li><a href="#workflow">${t.nav_workflow}</a></li>
                <li><a href="#figma-mcp">${t.nav_figma_mcp}</a></li>
                <li><a href="#naming">${t.nav_naming}</a></li>
            </ul>
        </nav>
        
        <div class="content">
            <!-- Introduction Section -->
            <section id="intro">
                <h2>${t.intro_title}</h2>
                
                <div class="beginner-tip">
                    <h3 style="margin-top: 0;">${t.intro_for_who_title}</h3>
                    <ul>
                        <li>${t.intro_for_who_1}</li>
                        <li>${t.intro_for_who_2}</li>
                        <li>${t.intro_for_who_3}</li>
                        <li>${t.intro_for_who_4}</li>
                        <li>${t.intro_for_who_5}</li>
                    </ul>
                </div>
                
                <h3>${t.intro_goal_title}</h3>
                <div class="grid-2">
                    <div class="card">
                        <h4>${t.intro_goal_1_title}</h4>
                        <p>${t.intro_goal_1_desc}</p>
                    </div>
                    <div class="card">
                        <h4>${t.intro_goal_2_title}</h4>
                        <p>${t.intro_goal_2_desc}</p>
                    </div>
                    <div class="card">
                        <h4>${t.intro_goal_3_title}</h4>
                        <p>${t.intro_goal_3_desc}</p>
                    </div>
                    <div class="card">
                        <h4>${t.intro_goal_4_title}</h4>
                        <p>${t.intro_goal_4_desc}</p>
                    </div>
                </div>
            </section>

            <!-- Basics Section -->
            <section id="basics">
                <h2>${t.basics_title}</h2>
                
                <div class="grid-2">
                    <div class="card">
                        <h4>${t.basics_1_title}</h4>
                        <p>${t.basics_1_desc}</p>
                        <code>Button/Primary/Large/Default</code>
                        <p style="margin-top: 10px; font-size: 0.9em; color: #718096;">${t.basics_1_note}</p>
                    </div>
                    
                    <div class="card">
                        <h4>${t.basics_2_title}</h4>
                        <p>${t.basics_2_desc}</p>
                        <ul style="font-size: 0.9em; margin-top: 10px;">
                            <li>${t.basics_2_item_1}</li>
                            <li>${t.basics_2_item_2}</li>
                            <li>${t.basics_2_item_3}</li>
                        </ul>
                    </div>
                    
                    <div class="card">
                        <h4>${t.basics_3_title}</h4>
                        <p>${t.basics_3_desc}</p>
                        <ul style="font-size: 0.9em; margin-top: 10px;">
                            <li>${t.basics_3_item_1}</li>
                            <li>${t.basics_3_item_2}</li>
                        </ul>
                    </div>
                    
                    <div class="card">
                        <h4>${t.basics_4_title}</h4>
                        <p>${t.basics_4_desc}</p>
                        <p style="font-size: 0.9em; margin-top: 10px;">${t.basics_4_note}</p>
                    </div>
                    
                    <div class="card">
                        <h4>${t.basics_5_title}</h4>
                        <p>${t.basics_5_desc}</p>
                        <p style="font-size: 0.9em; margin-top: 10px; color: #718096;">${t.basics_5_note}</p>
                    </div>
                    
                    <div class="card">
                        <h4>${t.basics_6_title}</h4>
                        <p>${t.basics_6_desc}</p>
                        <p style="font-size: 0.9em; margin-top: 10px; color: #718096;">${t.basics_6_note}</p>
                    </div>
                </div>
            </section>

            <!-- Hybrid Strategy Section -->
            <section id="hybrid">
                <h2>${t.hybrid_title}</h2>
                
                <div class="beginner-tip">
                    <h3 style="margin-top: 0;">${t.hybrid_misconception_title}</h3>
                    <p><strong>${t.hybrid_misconception_wrong}</strong></p>
                    <ul>
                        <li>${t.hybrid_misconception_1}</li>
                        <li>${t.hybrid_misconception_2}</li>
                        <li>${t.hybrid_misconception_3}</li>
                    </ul>
                    <p style="margin-top: 15px;"><strong>${t.hybrid_misconception_warning}</strong></p>
                </div>
                
                <h3>${t.hybrid_solution_title}</h3>
                
                <div class="strategy-box">
                    <h4 style="margin-top: 0;">${t.hybrid_strategy_core_title}</h4>
                    <p class="highlight-text">${t.hybrid_strategy_core_desc}</p>
                    
                    <div style="margin-top: 25px;">
                        <h4>${t.hybrid_2files_title}</h4>
                        <div class="phase-box">
                            <span class="phase-number">1</span>
                            <strong>${t.hybrid_file1_name}</strong>
                            <p style="margin: 10px 0 0 45px;">${t.hybrid_file1_desc}</p>
                        </div>
                        
                        <div class="phase-box">
                            <span class="phase-number">2</span>
                            <strong>${t.hybrid_file2_name}</strong>
                            <p style="margin: 10px 0 0 45px;">${t.hybrid_file2_desc}</p>
                        </div>
                    </div>
                </div>
                
                <h3>${t.hybrid_comparison_title}</h3>
                
                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th>${t.hybrid_table_approach}</th>
                            <th>${t.hybrid_table_pros}</th>
                            <th>${t.hybrid_table_cons}</th>
                            <th>${t.hybrid_table_rating}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>${t.hybrid_approach1_name}</strong><br>${t.hybrid_approach1_sub}</td>
                            <td class="pro">${t.hybrid_approach1_pros}</td>
                            <td class="con">${t.hybrid_approach1_cons}</td>
                            <td>⭐☆☆☆☆</td>
                        </tr>
                        <tr>
                            <td><strong>${t.hybrid_approach2_name}</strong><br>${t.hybrid_approach2_sub}</td>
                            <td class="pro">${t.hybrid_approach2_pros}</td>
                            <td class="con">${t.hybrid_approach2_cons}</td>
                            <td>⭐⭐☆☆☆</td>
                        </tr>
                        <tr>
                            <td><strong>${t.hybrid_approach3_name}</strong><br>${t.hybrid_approach3_sub}</td>
                            <td class="pro">${t.hybrid_approach3_pros}</td>
                            <td class="con">${t.hybrid_approach3_cons}</td>
                            <td>⭐⭐⭐⭐⭐</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>${t.hybrid_implementation_title}</h3>
                
                <ul class="step-list">
                    <li>
                        <strong>${t.hybrid_step1_title}</strong>
                        <ul style="margin-top: 10px;">
                            <li>${t.hybrid_step1_1}</li>
                            <li>${t.hybrid_step1_2}</li>
                            <li>${t.hybrid_step1_3}</li>
                        </ul>
                    </li>
                    <li>
                        <strong>${t.hybrid_step2_title}</strong>
                        <ul style="margin-top: 10px;">
                            <li>${t.hybrid_step2_1}</li>
                            <li>${t.hybrid_step2_2}</li>
                            <li>${t.hybrid_step2_3}</li>
                        </ul>
                    </li>
                    <li>
                        <strong>${t.hybrid_step3_title}</strong>
                        <ul style="margin-top: 10px;">
                            <li>${t.hybrid_step3_1}</li>
                            <li>${t.hybrid_step3_2}</li>
                            <li>${t.hybrid_step3_3}</li>
                            <li>${t.hybrid_step3_4}</li>
                        </ul>
                    </li>
                    <li>
                        <strong>${t.hybrid_step4_title}</strong>
                        <ul style="margin-top: 10px;">
                            <li>${t.hybrid_step4_1}</li>
                            <li>${t.hybrid_step4_2}</li>
                            <li>${t.hybrid_step4_3}</li>
                        </ul>
                    </li>
                    <li>
                        <strong>${t.hybrid_step5_title}</strong>
                        <ul style="margin-top: 10px;">
                            <li>${t.hybrid_step5_1}</li>
                            <li>${t.hybrid_step5_2}</li>
                            <li>${t.hybrid_step5_3}</li>
                        </ul>
                    </li>
                </ul>
                
                <div class="success-box">
                    <h4 style="margin-top: 0;">${t.hybrid_key_points_title}</h4>
                    <ul>
                        <li>${t.hybrid_key_point1}</li>
                        <li>${t.hybrid_key_point2}</li>
                        <li>${t.hybrid_key_point3}</li>
                        <li>${t.hybrid_key_point4}</li>
                    </ul>
                </div>
            </section>

            <!-- Plugins Section -->
            <section id="plugins">
                <h2>${t.plugins_title}</h2>
                
                <div class="grid-3">
                    <div class="plugin-card">
                        <div class="plugin-name">${t.plugin1_name}</div>
                        <p>${t.plugin1_use}</p>
                        <p>${t.plugin1_when}</p>
                        <p style="font-size: 0.9em; color: #667eea; margin-top: 10px;">${t.plugin1_rating}</p>
                    </div>
                    
                    <div class="plugin-card">
                        <div class="plugin-name">${t.plugin2_name}</div>
                        <p>${t.plugin2_use}</p>
                        <p>${t.plugin2_when}</p>
                        <p style="font-size: 0.9em; color: #667eea; margin-top: 10px;">${t.plugin2_rating}</p>
                    </div>
                    
                    <div class="plugin-card">
                        <div class="plugin-name">${t.plugin3_name}</div>
                        <p>${t.plugin3_use}</p>
                        <p>${t.plugin3_when}</p>
                        <p style="font-size: 0.9em; color: #667eea; margin-top: 10px;">${t.plugin3_rating}</p>
                    </div>
                    
                    <div class="plugin-card">
                        <div class="plugin-name">${t.plugin4_name}</div>
                        <p>${t.plugin4_use}</p>
                        <p>${t.plugin4_when}</p>
                        <p style="font-size: 0.9em; color: #667eea; margin-top: 10px;">${t.plugin4_rating}</p>
                    </div>
                    
                    <div class="plugin-card">
                        <div class="plugin-name">${t.plugin5_name}</div>
                        <p>${t.plugin5_use}</p>
                        <p>${t.plugin5_when}</p>
                        <p style="font-size: 0.9em; color: #667eea; margin-top: 10px;">${t.plugin5_rating}</p>
                    </div>
                    
                    <div class="plugin-card">
                        <div class="plugin-name">${t.plugin6_name}</div>
                        <p>${t.plugin6_use}</p>
                        <p>${t.plugin6_when}</p>
                        <p style="font-size: 0.9em; color: #667eea; margin-top: 10px;">${t.plugin6_rating}</p>
                    </div>
                </div>
            </section>

            <!-- Workflow Section -->
            <section id="workflow">
                <h2>${t.workflow_title}</h2>
                
                <div class="workflow-diagram">
                    <h3 style="margin-top: 0;">${t.workflow_day12_title}</h3>
                    <ul>
                        <li>${t.workflow_day12_1}</li>
                        <li>${t.workflow_day12_2}</li>
                        <li>${t.workflow_day12_3}</li>
                        <li>${t.workflow_day12_4}</li>
                        <li>${t.workflow_day12_5}</li>
                    </ul>
                </div>
                
                <div class="workflow-diagram">
                    <h3 style="margin-top: 0;">${t.workflow_day34_title}</h3>
                    <ul>
                        <li>${t.workflow_day34_1}</li>
                        <li>${t.workflow_day34_2}</li>
                        <li>${t.workflow_day34_3}</li>
                        <li>${t.workflow_day34_4}</li>
                    </ul>
                </div>
                
                <div class="workflow-diagram">
                    <h3 style="margin-top: 0;">${t.workflow_day5_title}</h3>
                    <ul>
                        <li>${t.workflow_day5_1}</li>
                        <li>${t.workflow_day5_2}</li>
                        <li>${t.workflow_day5_3}</li>
                        <li>${t.workflow_day5_4}</li>
                    </ul>
                </div>
                
                <div class="workflow-diagram">
                    <h3 style="margin-top: 0;">${t.workflow_day67_title}</h3>
                    <ul>
                        <li>${t.workflow_day67_1}</li>
                        <li>${t.workflow_day67_2}</li>
                        <li>${t.workflow_day67_3}</li>
                        <li>${t.workflow_day67_4}</li>
                        <li>${t.workflow_day67_5}</li>
                    </ul>
                </div>
                
                <div class="info-box">
                    <h4 style="margin-top: 0;">${t.workflow_goals_title}</h4>
                    <ul>
                        <li>${t.workflow_goal1}</li>
                        <li>${t.workflow_goal2}</li>
                        <li>${t.workflow_goal3}</li>
                        <li>${t.workflow_goal4}</li>
                        <li>${t.workflow_goal5}</li>
                    </ul>
                </div>
            </section>

            <!-- Figma MCP Section -->
            <section id="figma-mcp">
                <h2>${t.figmamcp_title}</h2>
                
                <div class="info-box">
                    <h3 style="margin-top: 0;">${t.figmamcp_what_title}</h3>
                    <p>${t.figmamcp_what_desc}</p>
                    <p style="margin-top: 10px;">${t.figmamcp_what_setup}</p>
                    <p style="font-size: 0.9em; color: #718096; margin-top: 10px;">${t.figmamcp_what_note}</p>
                </div>
                
                <h3>${t.figmamcp_how_title}</h3>
                <div class="grid-2" style="margin-bottom: 30px;">
                    <div class="card">
                        <h4>${t.figmamcp_step1_title}</h4>
                        <p>${t.figmamcp_step1_desc}</p>
                    </div>
                    <div class="card">
                        <h4>${t.figmamcp_step2_title}</h4>
                        <p>${t.figmamcp_step2_desc}</p>
                    </div>
                    <div class="card">
                        <h4>${t.figmamcp_step3_title}</h4>
                        <p>${t.figmamcp_step3_desc}</p>
                    </div>
                    <div class="card">
                        <h4>${t.figmamcp_step4_title}</h4>
                        <p>${t.figmamcp_step4_desc}</p>
                    </div>
                </div>
                
                <h3>${t.figmamcp_prompts_title}</h3>
                
                ${renderPromptSections(t, lang)}
                
                <div class="beginner-tip">
                    <h4 style="margin-top: 0;">${t.figmamcp_tips_title}</h4>
                    <ul>
                        <li>${t.figmamcp_tip1}</li>
                        <li>${t.figmamcp_tip2}</li>
                        <li>${t.figmamcp_tip3}</li>
                        <li>${t.figmamcp_tip4}</li>
                        <li>${t.figmamcp_tip5}</li>
                    </ul>
                </div>
                
                <div class="info-box">
                    <h4 style="margin-top: 0;">${t.figmamcp_troubleshoot_title}</h4>
                    <p>${t.figmamcp_q1}</p>
                    <p style="margin-top: 10px;">${t.figmamcp_q2}</p>
                    <p style="margin-top: 10px;">${t.figmamcp_q3}</p>
                </div>
            </section>

            <!-- Naming Section -->
            <section id="naming">
                <h2>${t.naming_title}</h2>
                
                <h3>${t.naming_basic_title}</h3>
                <table>
                    <thead>
                        <tr>
                            <th>${t.naming_table_element}</th>
                            <th>${t.naming_table_pattern}</th>
                            <th>${t.naming_table_example}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${t.naming_component}</td>
                            <td>${t.naming_component_pattern}</td>
                            <td>${t.naming_component_example}</td>
                        </tr>
                        <tr>
                            <td>${t.naming_variant}</td>
                            <td>${t.naming_variant_pattern}</td>
                            <td>${t.naming_variant_example}</td>
                        </tr>
                        <tr>
                            <td>${t.naming_variable}</td>
                            <td>${t.naming_variable_pattern}</td>
                            <td>${t.naming_variable_example}</td>
                        </tr>
                        <tr>
                            <td>${t.naming_page}</td>
                            <td>${t.naming_page_pattern}</td>
                            <td>${t.naming_page_example}</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>${t.naming_flyonui_title}</h3>
                <div class="file-structure">
<span class="folder">01_DesignSystem - Master/</span>
├── <span class="file">📄 Foundations</span>
│   ├── <span class="component">Color Styles (Primary, Secondary, etc.)</span>
│   ├── <span class="component">Text Styles (Heading/H1, Body/Regular, etc.)</span>
│   └── <span class="component">Variables (color.primary.500, spacing.md, etc.)</span>
│
├── <span class="file">📄 Atoms</span>
│   ├── <span class="component">Button/Primary/Large/Default</span>
│   ├── <span class="component">Button/Primary/Large/Hover</span>
│   ├── <span class="component">Input/Text/Medium/Default</span>
│   └── <span class="component">Badge/Status/Success</span>
│
├── <span class="file">📄 Molecules</span>
│   ├── <span class="component">Form-Field/Text/Default</span>
│   ├── <span class="component">Card/Product/Horizontal</span>
│   └── <span class="component">Nav-Item/Default/Active</span>
│
└── <span class="file">📄 Organisms</span>
    ├── <span class="component">Header/Dashboard/Desktop</span>
    ├── <span class="component">Sidebar/Navigation/Expanded</span>
    └── <span class="component">Table/Data/Sortable</span>

<span class="folder">02_ProductUI/</span>
├── <span class="file">📄 01_Dashboard</span>
├── <span class="file">📄 02_User-Management</span>
├── <span class="file">📄 03_Reports</span>
└── <span class="file">📄 04_Settings</span>
                </div>
                
                <div class="warning-box">
                    <h4 style="margin-top: 0;">${t.naming_mistakes_title}</h4>
                    <ul>
                        <li>${t.naming_mistake1}</li>
                        <li>${t.naming_mistake2}</li>
                        <li>${t.naming_mistake3}</li>
                        <li>${t.naming_mistake4}</li>
                    </ul>
                    
                    <p style="margin-top: 15px;"><strong>${t.naming_correct_title}</strong></p>
                    <ul>
                        <li>${t.naming_correct1}</li>
                        <li>${t.naming_correct2}</li>
                        <li>${t.naming_correct3}</li>
                    </ul>
                </div>
            </section>

            <!-- Final Section -->
            <div class="final-section">
                <h2>${t.final_title}</h2>
                <p style="font-size: 1.2em; margin: 20px 0;">
                    ${t.final_message}
                </p>
                <div style="margin-top: 30px;">
                    <h3 style="color: white; border: none; margin-bottom: 15px;">${t.final_first_step}</h3>
                    <ol style="text-align: left; display: inline-block; font-size: 1.1em;">
                        <li>${t.final_step1}</li>
                        <li>${t.final_step2}</li>
                        <li>${t.final_step3}</li>
                        <li>${t.final_step4}</li>
                        <li>${t.final_step5}</li>
                        <li>${t.final_step6}</li>
                    </ol>
                </div>
                <p style="margin-top: 30px; font-size: 1.1em;">
                    ${t.final_support}
                </p>
            </div>
        </div>
    `;
}

// Render prompt sections (keeping the original Japanese prompts)
function renderPromptSections(t, lang) {
    const prompts = getPrompts(lang);
    
    return `
        <!-- Comprehensive Component Review -->
        <div class="strategy-box">
            <h4>${t.prompt1_title}</h4>
            <p style="margin-bottom: 15px; color: #4a5568;">${t.prompt1_desc}</p>
            
            <div class="prompt-box">
                <button class="copy-button" onclick="copyToClipboard('prompt1')">${t.copy_button}</button>
                <pre id="prompt1">${prompts.prompt1}</pre>
            </div>
        </div>
        
        <!-- Naming Convention Check -->
        <div class="strategy-box">
            <h4>${t.prompt2_title}</h4>
            <p style="margin-bottom: 15px; color: #4a5568;">${t.prompt2_desc}</p>
            
            <div class="prompt-box">
                <button class="copy-button" onclick="copyToClipboard('prompt2')">${t.copy_button}</button>
                <pre id="prompt2">${prompts.prompt2}</pre>
            </div>
        </div>
        
        <!-- Auto Layout Check -->
        <div class="strategy-box">
            <h4>${t.prompt3_title}</h4>
            <p style="margin-bottom: 15px; color: #4a5568;">${t.prompt3_desc}</p>
            
            <div class="prompt-box">
                <button class="copy-button" onclick="copyToClipboard('prompt3')">${t.copy_button}</button>
                <pre id="prompt3">${prompts.prompt3}</pre>
            </div>
        </div>
        
        <!-- Variant Structure Check -->
        <div class="strategy-box">
            <h4>${t.prompt4_title}</h4>
            <p style="margin-bottom: 15px; color: #4a5568;">${t.prompt4_desc}</p>
            
            <div class="prompt-box">
                <button class="copy-button" onclick="copyToClipboard('prompt4')">${t.copy_button}</button>
                <pre id="prompt4">${prompts.prompt4}</pre>
            </div>
        </div>
        
        <!-- FlyonUI Integration Check -->
        <div class="strategy-box">
            <h4>${t.prompt5_title}</h4>
            <p style="margin-bottom: 15px; color: #4a5568;">${t.prompt5_desc}</p>
            
            <div class="prompt-box">
                <button class="copy-button" onclick="copyToClipboard('prompt5')">${t.copy_button}</button>
                <pre id="prompt5">${prompts.prompt5}</pre>
            </div>
        </div>
    `;
}

// Get prompts based on language
function getPrompts(lang) {
    const jaPrompts = {
        prompt1: `現在Figmaで選択しているコンポーネントを、以下の観点で包括的にレビューしてください:

【チェック項目】

1. **命名規則の確認**
   - スラッシュ(/)区切りで階層構造になっているか
   - Category/Type/Size/Stateのパターンに従っているか
   - 英語で統一されているか
   - 略語を使用していないか

2. **コンポーネント構造**
   - Auto Layoutが適切に設定されているか
   - Padding、Gap、Resizingの設定は適切か
   - 不要なネストがないか
   - レイヤー名は分かりやすいか

3. **バリアント設計**
   - プロパティ名は適切か(State, Size, Typeなど)
   - バリアントの組み合わせに漏れや重複はないか
   - Boolean型プロパティを活用できているか

4. **スタイルの一貫性**
   - Color StylesやText Stylesを使用しているか
   - ハードコーディングされた値はないか
   - Variablesを活用しているか

5. **FlyonUIとの整合性**
   - FlyonUIのコンポーネントを適切にラップしているか
   - デタッチせずにインスタンスのまま使用しているか

【出力形式】
- ✅ 良い点
- ⚠️ 改善が必要な点
- 💡 具体的な改善提案(ステップバイステップで)
- 📝 推奨される命名例

最後に、このコンポーネントの品質スコア(0-100)と総合評価をお願いします。`,

        prompt2: `選択中のコンポーネント/レイヤーの命名をチェックしてください:

【チェックポイント】
✓ スラッシュ(/)区切りの階層構造
✓ Category/Type/Size/Stateのパターン
✓ 英語表記の統一
✓ 略語の使用禁止
✓ 見た目ではなく機能で命名

【現在の命名】
→ (Claudeが自動で読み取ります)

【改善案】
もし命名に問題があれば、以下の形式で提案してください:
- ❌ 現在: [現在の名前]
- ✅ 推奨: [改善後の名前]
- 理由: [なぜその命名が良いのか]

問題なければ「✅ 命名規則に準拠しています」と返答してください。`,

        prompt3: `選択中のコンポーネントのAuto Layout設定をレビューしてください:

【確認項目】

1. **Auto Layoutの適用状況**
   - 適用されているか
   - Direction(横/縦)は適切か
   - ネストしたAuto Layoutが適切に設定されているか

2. **スペーシング**
   - Paddingの値は適切か
   - Gapの設定は統一されているか
   - マジックナンバーではなく変数を使用しているか

3. **Resizing設定**
   - Hug/Fixed/Fillの選択は適切か
   - Min/Max Widthが設定されているか
   - レスポンシブに対応できる構造か

4. **子要素の配置**
   - Alignment(揃え)は適切か
   - 不要なAbsolute positioningはないか

【出力】
- 現在の設定の要約
- ⚠️ 問題点
- 💡 最適化の提案
- 🎯 推奨設定値

コンテンツが変化しても破綻しない構造になっているかを重点的に評価してください。`,

        prompt4: `選択中のコンポーネントのバリアント構造を分析してください:

【分析項目】

1. **プロパティ設計**
   - プロパティ名は適切か(State, Size, Type, Icon など)
   - Boolean型を活用できているか
   - Instance Swapプロパティは適切に使われているか

2. **バリアントの完全性**
   - 必要なバリアントの組み合わせは全て揃っているか
   - 不要な重複バリアントはないか
   - 状態遷移(Default → Hover → Active など)は論理的か

3. **メンテナンス性**
   - 新しいバリアントを追加しやすい構造か
   - プロパティ数は適切か(多すぎないか)
   - 命名規則は統一されているか

4. **実装連携**
   - 開発者が使いやすい構造か
   - propsとして渡しやすいプロパティ名か

【出力形式】
📊 現在のバリアント構成
- プロパティ一覧
- バリアント数

⚠️ 問題点
- 不足しているバリアント
- 不要なバリアント
- プロパティ設計の課題

💡 改善提案
- 追加すべきバリアント
- 統合すべきバリアント
- プロパティの再設計案

最後に「拡張性スコア」(0-100)を評価してください。`,

        prompt5: `選択中のコンポーネントについて、FlyonUIとの統合状況をチェックしてください:

【確認ポイント】

1. **ラップ戦略の実装**
   - FlyonUIのインスタンスをデタッチせずに使用しているか
   - 適切にコンポーネント化(ラップ)されているか
   - カスタマイズはバリアントプロパティで実現しているか

2. **依存関係の管理**
   - このコンポーネントはどのファイルに配置すべきか
     * 01_DesignSystem - Master
     * 02_ProductUI
   - ライブラリの参照は適切か

3. **カスタマイズ方法**
   - デタッチが必要な箇所はあるか(ある場合は要注意)
   - バリアントで対応できない部分はあるか
   - FlyonUIの更新に追従できる構造か

4. **代替案の検討**
   - FlyonUIのコンポーネントを使うべきか
   - ゼロから作るべきか
   - ラップするべきか

【出力】
✅ 適切な点
⚠️ リスクがある点
💡 推奨される対応
🎯 最適なファイル配置

ハイブリッド戦略の観点から、長期的なメンテナンス性を重視して評価してください。`
    };
    
    const enPrompts = {
        prompt1: `Please comprehensively review the currently selected component in Figma from the following perspectives:

【Check Items】

1. **Naming Convention Check**
   - Is it structured hierarchically with slash (/) separators?
   - Does it follow the Category/Type/Size/State pattern?
   - Is it consistently in English?
   - Are abbreviations avoided?

2. **Component Structure**
   - Is Auto Layout properly configured?
   - Are Padding, Gap, and Resizing settings appropriate?
   - Are there unnecessary nests?
   - Are layer names clear?

3. **Variant Design**
   - Are property names appropriate (State, Size, Type, etc.)?
   - Are there any missing or duplicate variant combinations?
   - Are Boolean properties being utilized?

4. **Style Consistency**
   - Are Color Styles and Text Styles being used?
   - Are there any hard-coded values?
   - Are Variables being utilized?

5. **FlyonUI Integration**
   - Are FlyonUI components properly wrapped?
   - Are instances being used without detaching?

【Output Format】
- ✅ Good points
- ⚠️ Areas needing improvement
- 💡 Specific improvement suggestions (step by step)
- 📝 Recommended naming examples

Finally, please provide a quality score (0-100) and overall evaluation for this component.`,

        prompt2: `Please check the naming of the selected component/layer:

【Checkpoints】
✓ Hierarchical structure with slash (/) separators
✓ Category/Type/Size/State pattern
✓ Consistent English notation
✓ No abbreviations
✓ Named by function, not appearance

【Current Naming】
→ (Claude will read automatically)

【Improvement Suggestions】
If there are issues with naming, please suggest in the following format:
- ❌ Current: [current name]
- ✅ Recommended: [improved name]
- Reason: [why that naming is better]

If no issues, please respond with "✅ Naming convention compliant."`,

        prompt3: `Please review the Auto Layout settings of the selected component:

【Check Items】

1. **Auto Layout Application**
   - Is it applied?
   - Is the Direction (horizontal/vertical) appropriate?
   - Are nested Auto Layouts properly configured?

2. **Spacing**
   - Are Padding values appropriate?
   - Is Gap setting consistent?
   - Are variables used instead of magic numbers?

3. **Resizing Settings**
   - Is Hug/Fixed/Fill selection appropriate?
   - Are Min/Max Width set?
   - Is the structure responsive?

4. **Child Element Placement**
   - Is Alignment appropriate?
   - Is there unnecessary Absolute positioning?

【Output】
- Summary of current settings
- ⚠️ Issues
- 💡 Optimization suggestions
- 🎯 Recommended settings

Please focus on evaluating whether the structure can withstand content changes without breaking.`,

        prompt4: `Please analyze the variant structure of the selected component:

【Analysis Items】

1. **Property Design**
   - Are property names appropriate (State, Size, Type, Icon, etc.)?
   - Are Boolean types being utilized?
   - Are Instance Swap properties used appropriately?

2. **Variant Completeness**
   - Are all necessary variant combinations present?
   - Are there unnecessary duplicate variants?
   - Are state transitions (Default → Hover → Active, etc.) logical?

3. **Maintainability**
   - Is the structure easy to add new variants?
   - Is the number of properties appropriate (not too many)?
   - Are naming conventions consistent?

4. **Implementation Integration**
   - Is the structure developer-friendly?
   - Are property names easy to pass as props?

【Output Format】
📊 Current Variant Configuration
- Property list
- Number of variants

⚠️ Issues
- Missing variants
- Unnecessary variants
- Property design challenges

💡 Improvement Suggestions
- Variants to add
- Variants to consolidate
- Property redesign proposals

Finally, please evaluate the "scalability score" (0-100).`,

        prompt5: `Please check the FlyonUI integration status of the selected component:

【Check Points】

1. **Wrap Strategy Implementation**
   - Are FlyonUI instances used without detaching?
   - Is it properly componentized (wrapped)?
   - Are customizations realized through variant properties?

2. **Dependency Management**
   - Which file should this component be placed in?
     * 01_DesignSystem - Master
     * 02_ProductUI
   - Are library references appropriate?

3. **Customization Method**
   - Are there parts that require detaching? (caution if yes)
   - Are there parts that cannot be handled with variants?
   - Can the structure follow FlyonUI updates?

4. **Alternative Considerations**
   - Should FlyonUI components be used?
   - Should it be built from scratch?
   - Should it be wrapped?

【Output】
✅ Appropriate points
⚠️ Risk points
💡 Recommended actions
🎯 Optimal file placement

Please evaluate from the hybrid strategy perspective, emphasizing long-term maintainability.`
    };
    
    const viPrompts = {
        prompt1: `Vui lòng xem xét toàn diện component hiện đang được chọn trong Figma từ các góc độ sau:

【Các mục kiểm tra】

1. **Kiểm tra quy tắc đặt tên**
   - Có cấu trúc phân cấp với dấu gạch chéo (/) không?
   - Có tuân theo mẫu Category/Type/Size/State không?
   - Có nhất quán bằng tiếng Anh không?
   - Có tránh viết tắt không?

2. **Cấu trúc Component**
   - Auto Layout có được cấu hình đúng không?
   - Cài đặt Padding, Gap và Resizing có phù hợp không?
   - Có nest không cần thiết không?
   - Tên layer có rõ ràng không?

3. **Thiết kế Variant**
   - Tên properties có phù hợp không (State, Size, Type, v.v.)?
   - Có thiếu hoặc trùng lặp variant combinations không?
   - Boolean properties có được sử dụng không?

4. **Tính nhất quán của Style**
   - Color Styles và Text Styles có được sử dụng không?
   - Có giá trị hard-coded không?
   - Variables có được sử dụng không?

5. **Tích hợp FlyonUI**
   - Components FlyonUI có được wrap đúng cách không?
   - Instances có được sử dụng mà không detach không?

【Định dạng đầu ra】
- ✅ Điểm tốt
- ⚠️ Cần cải thiện
- 💡 Đề xuất cải thiện cụ thể (từng bước)
- 📝 Ví dụ đặt tên được đề xuất

Cuối cùng, vui lòng cung cấp điểm chất lượng (0-100) và đánh giá tổng thể cho component này.`,

        prompt2: `Vui lòng kiểm tra cách đặt tên của component/layer được chọn:

【Điểm kiểm tra】
✓ Cấu trúc phân cấp với dấu gạch chéo (/)
✓ Mẫu Category/Type/Size/State
✓ Ký hiệu tiếng Anh nhất quán
✓ Không viết tắt
✓ Đặt tên theo chức năng, không theo hình thức

【Tên hiện tại】
→ (Claude sẽ đọc tự động)

【Đề xuất cải thiện】
Nếu có vấn đề với cách đặt tên, vui lòng đề xuất theo định dạng sau:
- ❌ Hiện tại: [tên hiện tại]
- ✅ Đề xuất: [tên cải thiện]
- Lý do: [tại sao tên đó tốt hơn]

Nếu không có vấn đề, vui lòng trả lời "✅ Tuân thủ quy tắc đặt tên."`,

        prompt3: `Vui lòng xem xét cài đặt Auto Layout của component được chọn:

【Các mục kiểm tra】

1. **Ứng dụng Auto Layout**
   - Có được áp dụng không?
   - Direction (ngang/dọc) có phù hợp không?
   - Auto Layouts lồng nhau có được cấu hình đúng không?

2. **Khoảng cách**
   - Giá trị Padding có phù hợp không?
   - Cài đặt Gap có nhất quán không?
   - Có sử dụng variables thay vì magic numbers không?

3. **Cài đặt Resizing**
   - Lựa chọn Hug/Fixed/Fill có phù hợp không?
   - Min/Max Width có được đặt không?
   - Cấu trúc có responsive không?

4. **Vị trí phần tử con**
   - Alignment có phù hợp không?
   - Có Absolute positioning không cần thiết không?

【Đầu ra】
- Tóm tắt cài đặt hiện tại
- ⚠️ Vấn đề
- 💡 Đề xuất tối ưu hóa
- 🎯 Cài đặt được đề xuất

Vui lòng tập trung đánh giá xem cấu trúc có thể chịu được thay đổi nội dung mà không bị hỏng không.`,

        prompt4: `Vui lòng phân tích cấu trúc variant của component được chọn:

【Các mục phân tích】

1. **Thiết kế Property**
   - Tên properties có phù hợp không (State, Size, Type, Icon, v.v.)?
   - Boolean types có được sử dụng không?
   - Instance Swap properties có được sử dụng phù hợp không?

2. **Tính đầy đủ của Variant**
   - Tất cả các variant combinations cần thiết có đầy đủ không?
   - Có variants trùng lặp không cần thiết không?
   - Chuyển đổi trạng thái (Default → Hover → Active, v.v.) có logic không?

3. **Khả năng bảo trì**
   - Cấu trúc có dễ thêm variants mới không?
   - Số lượng properties có phù hợp không (không quá nhiều)?
   - Quy tắc đặt tên có nhất quán không?

4. **Tích hợp triển khai**
   - Cấu trúc có thân thiện với developer không?
   - Tên properties có dễ truyền như props không?

【Định dạng đầu ra】
📊 Cấu hình Variant hiện tại
- Danh sách properties
- Số lượng variants

⚠️ Vấn đề
- Variants thiếu
- Variants không cần thiết
- Thách thức thiết kế property

💡 Đề xuất cải thiện
- Variants cần thêm
- Variants cần hợp nhất
- Đề xuất thiết kế lại property

Cuối cùng, vui lòng đánh giá "điểm khả năng mở rộng" (0-100).`,

        prompt5: `Vui lòng kiểm tra tình trạng tích hợp FlyonUI của component được chọn:

【Điểm kiểm tra】

1. **Triển khai chiến lược Wrap**
   - Instances FlyonUI có được sử dụng mà không detach không?
   - Có được componentized (wrapped) đúng cách không?
   - Tùy chỉnh có được thực hiện thông qua variant properties không?

2. **Quản lý phụ thuộc**
   - Component này nên được đặt trong file nào?
     * 01_DesignSystem - Master
     * 02_ProductUI
   - Tham chiếu thư viện có phù hợp không?

3. **Phương pháp tùy chỉnh**
   - Có phần nào cần detach không? (cẩn thận nếu có)
   - Có phần nào không thể xử lý bằng variants không?
   - Cấu trúc có thể theo cập nhật FlyonUI không?

4. **Cân nhắc thay thế**
   - Nên sử dụng components FlyonUI không?
   - Nên xây dựng từ đầu không?
   - Nên wrap không?

【Đầu ra】
✅ Điểm phù hợp
⚠️ Điểm rủi ro
💡 Hành động được đề xuất
🎯 Vị trí file tối ưu

Vui lòng đánh giá từ góc độ chiến lược hybrid, nhấn mạnh khả năng bảo trì lâu dài.`
    };
    
    // Return prompts based on language
    if (lang === 'en') return enPrompts;
    if (lang === 'vi') return viPrompts;
    return jaPrompts; // Default to Japanese
}

// Copy to clipboard function
function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).textContent;
    const t = translations[currentLang];
    
    navigator.clipboard.writeText(text).then(function() {
        alert(t.copy_success);
    }, function(err) {
        console.error(t.copy_error, err);
    });
}
