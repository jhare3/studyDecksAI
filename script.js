// Preloaded flashcard data
const decks = {
    "instance-config": [
      {
        question: "What is a ServiceNow instance?",
        answer: "A ServiceNow instance is a single installation of the ServiceNow platform, hosted on the cloud or on-premises, that allows users to manage IT services, workflows, and business processes."
      },
      {
        question: "What are system properties?",
        answer: "System properties are configuration settings that control the behavior of the ServiceNow instance."
      },
      {
        question: "How do you modify a system property?",
        answer: "Go to System Definition > System Properties, search for the property, and update its value."
      },
      {
        question: "What is an update set?",
        answer: "An update set is a collection of configuration changes that can be moved between instances (e.g., Dev to Prod)."
      },
      {
        question: "How do you create and deploy an update set?",
        answer: "Go to System Definition > Update Sets, create a new update set, make changes, and deploy it to another instance."
      },
      {
        question: "What is the purpose of roles in ServiceNow?",
        answer: "Roles control access to applications, modules, and data based on a user's responsibilities."
      },
      {
        question: "What is an ACL (Access Control List)?",
        answer: "An ACL defines who can access specific records or fields and what actions they can perform."
      },
      {
        question: "How do you activate a plugin?",
        answer: "Go to System Definition > Plugins, search for the plugin, and click 'Activate'."
      },
      {
        question: "What is the purpose of the System Definition > Applications module?",
        answer: "The Applications module is used to manage and configure applications, modules, and plugins in a ServiceNow instance."
      },
      {
        question: "What is a table in ServiceNow?",
        answer: "A table in ServiceNow is a database structure that stores records for a specific type of data, such as incidents, users, or tasks."
      },
      {
        question: "What is a business rule in ServiceNow?",
        answer: "A business rule in ServiceNow is server-side script that executes when a record is displayed, inserted, updated, or deleted, or when a table is queried."
      },
      {
        question: "What is the difference between a UI Policy and a Data Policy?",
        answer: "A UI Policy controls the visibility, mandatoriness, and read-only state of fields on a form, while a Data Policy enforces data integrity rules at the database level."
      },
      {
        question: "What are system properties in ServiceNow?",
        answer: "System properties are configuration settings that control the behavior of a ServiceNow instance. They can be accessed via System Definition > System Properties in the application navigator."
      },
      {
        question: "How do you personalize a ServiceNow instance?",
        answer: "Instance personalization can be done by configuring system properties, UI policies, business rules, and client scripts to tailor the platform to specific business needs."
      },
      {
        question: "What is a plugin in ServiceNow?",
        answer: "A plugin is a modular component that adds specific functionality to a ServiceNow instance. Plugins can be activated or deactivated as needed."
      },
      {
        question: "How do you activate a plugin in ServiceNow?",
        answer: "Plugins can be activated via System Definition > Plugins in the application navigator. Search for the plugin and click 'Activate'."
      },
      {
        question: "What is the purpose of the 'sys_properties' table?",
        answer: "The 'sys_properties' table stores all system properties and their values for a ServiceNow instance."
      },
      {
        question: "What is a dictionary entry in ServiceNow?",
        answer: "A dictionary entry defines the metadata for a field in a table, such as its data type, label, and default value."
      },
      {
        question: "What is the difference between a global application and a scoped application?",
        answer: "A global application has access to all data and features in the instance, while a scoped application is restricted to its own data and functionality for better security and modularity."
      },
      {
        question: "What is the 'sys_scope' table used for?",
        answer: "The 'sys_scope' table stores information about applications and their scope in a ServiceNow instance."
      },
      {
        question: "What is the purpose of the 'sys_plugin' table?",
        answer: "The 'sys_plugin' table stores information about all plugins installed in a ServiceNow instance."
      },
      {
        question: "How do you configure a new system property?",
        answer: "To configure a new system property, navigate to System Definition > System Properties, click 'New', and fill in the required fields such as name, type, and value."
      },
      {
        question: "What are system properties in ServiceNow?",
        answer: "System properties are configuration settings that control the behavior of the ServiceNow instance, such as enabling features or setting default values."
      },
      {
        question: "How do you modify a system property?",
        answer: "Go to System Definition > System Properties, search for the property, and update its value. Changes take effect immediately unless specified otherwise."
      },
      {
        question: "What is the purpose of the 'glide.ui.security.allow_override_priority' system property?",
        answer: "This property determines whether users can override the priority of an incident. If set to 'false', users cannot change the priority once it's set."
      },
      {
        question: "What is an update set in ServiceNow?",
        answer: "An update set is a collection of configuration changes that can be moved between instances (e.g., from Dev to Prod). It helps track and manage changes."
      },
      {
        question: "How do you create an update set?",
        answer: "Go to System Definition > Update Sets > Create New. Name the update set and set it as the 'Current' update set to track changes."
      },
      {
        question: "How do you deploy an update set to another instance?",
        answer: "Export the update set as an XML file from the source instance, then import it into the target instance using the Update Sets module."
      },
      {
        question: "What is a role in ServiceNow?",
        answer: "A role defines a user's access to applications, modules, and data. Roles are assigned to users or groups to control what they can see and do."
      },
      {
        question: "What is an ACL (Access Control List)?",
        answer: "An ACL is a security rule that controls access to specific records, fields, or actions. It defines who can access what and under what conditions."
      },
      {
        question: "How do you create an ACL in ServiceNow?",
        answer: "Go to System Security > Access Control > New, define the conditions (e.g., table, field, role), and set the required permissions (read, write, etc.)."
      },
      {
        question: "What is the 'sys_properties_domain' table used for?",
        answer: "The 'sys_properties_domain' table links system properties to specific domains for multi-domain instances."
      },
      {
        question: "What is the difference between a global business rule and a scoped business rule?",
        answer: "A global business rule applies to all tables in the instance, while a scoped business rule applies only to tables within a specific application scope."
      },
      {
        question: "What is the purpose of the 'sys_ui_policy' table?",
        answer: "The 'sys_ui_policy' table stores all UI policies defined in a ServiceNow instance."
      },
      {
        question: "What is the 'sys_script' table used for?",
        answer: "The 'sys_script' table stores all business rules, client scripts, and script includes in a ServiceNow instance."
      },
      {
        question: "What is the purpose of the 'sys_ui_action' table?",
        answer: "The 'sys_ui_action' table stores all UI actions (buttons, links, etc.) defined in a ServiceNow instance."
      },
      {
        question: "What is the difference between a client script and a business rule?",
        answer: "A client script runs in the user's browser and affects the UI, while a business rule runs on the server and affects data processing."
      },
      {
        question: "What is the purpose of the 'sys_ui_page' table?",
        answer: "The 'sys_ui_page' table stores all custom UI pages created in a ServiceNow instance."
      },
      {
        question: "What is the 'sys_ui_script' table used for?",
        answer: "The 'sys_ui_script' table stores all UI scripts in a ServiceNow instance."
      },
      {
        question: "What is the purpose of the 'sys_ui_macro' table?",
        answer: "The 'sys_ui_macro' table stores all UI macros defined in a ServiceNow instance."
      },
      {
        question: "What is the 'sys_ui_list_control' table used for?",
        answer: "The 'sys_ui_list_control' table stores all list controls (e.g., filters, buttons) defined in a ServiceNow instance."
      }

    ],
    "data-management": [
      {
        question: "What is CMDB in ServiceNow?",
        answer: "The Configuration Management Database (CMDB) is a centralized repository that stores information about all the configuration items (CIs) in an organization's IT environment."
      },
      {
        question: "What is CSDM?",
        answer: "The Common Service Data Model (CSDM) is a framework that provides a standardized way to model and organize data in the CMDB to support IT Service Management (ITSM) and IT Operations Management (ITOM)."
      },
      {
        question: "What is a table in ServiceNow?",
        answer: "A table is a database structure that stores records. Each table consists of fields (columns) and records (rows)."
      },
      {
        question: "How do you create a custom table in ServiceNow?",
        answer: "Go to System Definition > Tables, click 'New', and define the table name, label, and other properties."
      },
      {
        question: "What is an extended table?",
        answer: "An extended table is a table that inherits fields and properties from a parent table (e.g., extending the Task table)."
      },
      {
        question: "What is a reference field?",
        answer: "A reference field creates a relationship between two tables, allowing you to link records from one table to another."
      },
      {
        question: "How do you create a reference field?",
        answer: "When creating a field, set the type to 'Reference' and choose the target table."
      },
      {
        question: "What is a data policy?",
        answer: "A data policy enforces rules on fields, such as making them mandatory or read-only, based on conditions."
      },
      {
        question: "What is the difference between a UI Policy and a Data Policy?",
        answer: "A UI Policy controls field behavior on a specific form in the UI (client-side), while a Data Policy enforces rules at the database level for all data entry methods (server-side)."
      },
      {
        question: "How do you import data into ServiceNow?",
        answer: "Use the Import Set tool to map and transform data from a CSV or other source into a ServiceNow table."
      },
      {
        question: "What is a Configuration Item (CI)?",
        answer: "A Configuration Item (CI) is any component or resource that is managed in the CMDB, such as servers, applications, or network devices."
      },
      {
        question: "What is the purpose of the 'cmdb_ci' table?",
        answer: "The 'cmdb_ci' table is the base table for all Configuration Items (CIs) in the CMDB. It stores common attributes shared by all CIs."
      },
      {
        question: "What is the difference between a class and a table in ServiceNow?",
        answer: "A class is a logical grouping of tables that share a common base table, while a table is a specific instance of a class that stores records."
      },
      {
        question: "What is an Access Control List (ACL) in ServiceNow?",
        answer: "An Access Control List (ACL) is a security rule that controls access to records in a table or field based on user roles and conditions."
      },
      {
        question: "What is the purpose of the 'sys_security_acl' table?",
        answer: "The 'sys_security_acl' table stores all Access Control List (ACL) rules defined in a ServiceNow instance."
      },
      {
        question: "What is the difference between a read ACL and a write ACL?",
        answer: "A read ACL controls who can view records, while a write ACL controls who can create, update, or delete records."
      },
      {
        question: "What is CMDB in ServiceNow?",
        answer: "The Configuration Management Database (CMDB) is a centralized repository that stores information about all the configuration items (CIs) in an organization's IT environment."
      },
      {
        question: "What is a Configuration Item (CI)?",
        answer: "A Configuration Item (CI) is any component or resource that is managed in the CMDB, such as servers, applications, or network devices."
      },
      {
        question: "What is the base table for all CIs in ServiceNow?",
        answer: "The base table for all CIs is `cmdb`."
      },
      {
        question: "What is the `cmdb_ci` table?",
        answer: "The `cmdb_ci` table is the base table for all hardware and software CIs. It inherits from the `cmdb` table."
      },
      {
        question: "What is the `cmdb_ci_service` table?",
        answer: "The `cmdb_ci_service` table is the base table for all service CIs, such as IT services and business services."
      },
      {
        question: "What is the Common Service Data Model (CSDM)?",
        answer: "The Common Service Data Model (CSDM) is a framework that provides a standardized way to organize and manage CIs in the CMDB."
      },
      {
        question: "What is the purpose of the `cmdb_rel_ci` table?",
        answer: "The `cmdb_rel_ci` table stores relationships between CIs, such as 'depends on' or 'runs on.'"
      },
      {
        question: "What is the `cmdb_rel_type` table?",
        answer: "The `cmdb_rel_type` table defines the types of relationships between CIs, such as 'depends on,' 'runs on,' or 'connected to.'"
      },
      {
        question: "How do you create a custom table in ServiceNow?",
        answer: "Go to **System Definition > Tables**, click **New**, and configure the table name, label, and other properties."
      },
      {
        question: "What is an Access Control List (ACL)?",
        answer: "An Access Control List (ACL) is a security rule that controls access to tables, records, and fields based on user roles."
      },
      {
        question: "How do you create an ACL in ServiceNow?",
        answer: "Go to **System Security > Access Control > Access Control (ACL)**, click **New**, and configure the table, roles, and conditions."
      },
      {
        question: "What is the purpose of the `sys_user` table?",
        answer: "The `sys_user` table stores information about users in the ServiceNow instance."
      },
      {
        question: "What is the `sys_user_role` table?",
        answer: "The `sys_user_role` table stores the roles assigned to users."
      },
      {
        question: "What is the `sys_user_group` table?",
        answer: "The `sys_user_group` table stores groups of users, which can be used to manage access and permissions."
      },
      {
        question: "What is the purpose of the `sys_db_object` table?",
        answer: "The `sys_db_object` table stores metadata about all tables in the ServiceNow instance."
      },
      {
        question: "What is the difference between a table and a view in ServiceNow?",
        answer: "A table stores data, while a view is a filtered or formatted display of data from a table."
      },
      {
        question: "What is the purpose of the `sys_script` table?",
        answer: "The `sys_script` table stores business rules, which are server-side scripts that execute when a record is displayed, inserted, updated, or deleted."
      },
      {
        question: "What is the purpose of the `sys_ui_policy` table?",
        answer: "The `sys_ui_policy` table stores UI policies, which control the behavior of fields on a form (e.g., making a field read-only or mandatory)."
      },
      {
        question: "What is the purpose of the `sys_audit` table?",
        answer: "The `sys_audit` table stores audit logs, which track changes to records in the ServiceNow instance."
      },
      {
        question: "What is the purpose of the `sys_attachment` table?",
        answer: "The `sys_attachment` table stores attachments (e.g., files, images) that are uploaded to records in the ServiceNow instance."
      },
      {
        question: "What is the 'sys_db_object' table used for?",
        answer: "The 'sys_db_object' table stores metadata about all tables in a ServiceNow instance, including their names, labels, and base tables."
      },
      {
        question: "What is the purpose of the 'sys_dictionary' table?",
        answer: "The 'sys_dictionary' table stores metadata about all fields in a ServiceNow instance, including their data types, labels, and table associations."
      },
      {
        question: "What is the difference between a base table and an extended table?",
        answer: "A base table is a standalone table, while an extended table inherits fields and properties from its base table."
      },
      {
        question: "What is the 'cmdb_model' table used for?",
        answer: "The 'cmdb_model' table stores information about hardware and software models in the CMDB."
      },
      {
        question: "What is the purpose of the 'cmdb_rel_ci' table?",
        answer: "The 'cmdb_rel_ci' table stores relationships between Configuration Items (CIs) in the CMDB."
      },
      {
        question: "What is the difference between a parent-child relationship and a peer relationship in the CMDB?",
        answer: "A parent-child relationship represents a hierarchical structure, while a peer relationship represents a non-hierarchical association between CIs."
      },
      {
        question: "What is the 'cmdb_ci_service' table used for?",
        answer: "The 'cmdb_ci_service' table stores information about services in the CMDB, such as business services and IT services."
      },
      {
        question: "What is the purpose of the 'cmdb_ci_business_app' table?",
        answer: "The 'cmdb_ci_business_app' table stores information about business applications in the CMDB."
      },
      {
        question: "What is the 'cmdb_ci_server' table used for?",
        answer: "The 'cmdb_ci_server' table stores information about servers in the CMDB."
      },
      {
        question: "What is the purpose of the 'cmdb_ci_network' table?",
        answer: "The 'cmdb_ci_network' table stores information about network devices in the CMDB."
      },
      {
        question: "What is the 'cmdb_ci_cloud_service' table used for?",
        answer: "The 'cmdb_ci_cloud_service' table stores information about cloud services in the CMDB."
      },
      {
        question: "What is the purpose of the 'cmdb_ci_computer' table?",
        answer: "The 'cmdb_ci_computer' table stores information about computers and workstations in the CMDB."
      },
      {
        question: "What is the 'cmdb_ci_database' table used for?",
        answer: "The 'cmdb_ci_database' table stores information about databases in the CMDB."
      },
      {
        question: "What is the purpose of the 'cmdb_ci_application' table?",
        answer: "The 'cmdb_ci_application' table stores information about software applications in the CMDB."
      },
      {
        question: "What is the 'cmdb_ci_infrastructure' table used for?",
        answer: "The 'cmdb_ci_infrastructure' table stores information about infrastructure components in the CMDB."
      },
      {
        question: "What is the purpose of the 'cmdb_ci_service_account' table?",
        answer: "The 'cmdb_ci_service_account' table stores information about service accounts in the CMDB."
      },
      {
        question: "What is the 'cmdb_ci_virtualization' table used for?",
        answer: "The 'cmdb_ci_virtualization' table stores information about virtualization components in the CMDB."
      }
    ],
    "collaboration": [
      {
        question: "What is a knowledge article?",
        answer: "A knowledge article is a document that provides information or solutions to common issues, stored in the Knowledge Base."
      },
      {
        question: "How do you create a knowledge article?",
        answer: "Go to Knowledge > Create New, fill in the details, and publish the article."
      },
      {
        question: "What is the Service Portal?",
        answer: "The Service Portal is a user-friendly interface where end-users can access services, knowledge articles, and make requests."
      },
      {
        question: "How do you customize the Service Portal?",
        answer: "Use the Service Portal Designer to modify pages, widgets, and themes."
      },
      {
        question: "What are activity streams?",
        answer: "Activity streams display real-time updates and interactions related to records, such as comments or workflow updates."
      },
      {
        question: "How do you configure notifications?",
        answer: "Go to System Notification > Email > Notifications, and create or modify notification templates."
      },
      {
        question: "What is an application menu?",
        answer: "An application menu is a navigation menu that organizes modules and features for a specific application."
      }
    ]
  };

// DOM Elements
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const showAnswerButton = document.getElementById("show-answer");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const currentCardElement = document.getElementById("current-card");
const totalCardsElement = document.getElementById("total-cards");
const deckSelect = document.getElementById("deck-select");
const deckTitle = document.getElementById("deck-title");

let currentDeck = decks["instance-config"];
let currentCardIndex = 0;

// Initialize the app
function init() {
  updateDeck();
  updateCard();
}

// Update the deck based on the selected option
function updateDeck() {
  const selectedDeck = deckSelect.value;
  currentDeck = decks[selectedDeck];
  deckTitle.textContent = deckSelect.options[deckSelect.selectedIndex].text;
  currentCardIndex = 0;
  updateCard();
}

// Update the card display
function updateCard() {
  const currentCard = currentDeck[currentCardIndex];
  questionElement.textContent = currentCard.question;
  answerElement.textContent = currentCard.answer;
  answerElement.classList.add("hidden");
  currentCardElement.textContent = currentCardIndex + 1;
  totalCardsElement.textContent = currentDeck.length;
}

// Event Listeners
showAnswerButton.addEventListener("click", () => {
  answerElement.classList.toggle("hidden");
});

previousButton.addEventListener("click", () => {
  currentCardIndex = (currentCardIndex - 1 + currentDeck.length) % currentDeck.length;
  updateCard();
});

nextButton.addEventListener("click", () => {
  currentCardIndex = (currentCardIndex + 1) % currentDeck.length;
  updateCard();
});

deckSelect.addEventListener("change", updateDeck);

// Start the app
init();