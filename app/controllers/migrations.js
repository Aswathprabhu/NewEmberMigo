import Controller from '@ember/controller';
import {
  inject as service
} from '@ember/service';
import {
  set
} from '@ember/object';


export default Controller.extend({
  ajax: service(),
  notification: service('notification-messages'),
  storage: service(),
  parseCompleted: null,
  errorObjo:[],
  TotalModuleMap:{
      tally: [{
          name: 'Chart Of Accounts',
          success: 0,
          failure: 0,
          parsed: 0,
          total: 0,
          percent: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Bank Accounts',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Currencies',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Opening Balance',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Taxes',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Contacts',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Items',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Estimates',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Sales Orders',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Invoices',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },

        {
          name: 'Credit Notes',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Expenses',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Purchase Orders',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Bills',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Vendor Payments',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Debit Notes',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        }
      ],
      quickbooks: [{
          name: 'Chart Of Accounts',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Taxes',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Tax Groups',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Contacts',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Items',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors: [],
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Estimates',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Sales Orders',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Invoices',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Credit Notes',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Debit Notes',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },

        {
          name: 'Refund Credits',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Customer Payments',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Bills',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Debit Notes',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Expenses',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        }
      ],
      xero: [{
          name: 'Chart Of Accounts',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Currencies',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Opening Balance',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Contacts',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Items',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Invoices',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Customer Payments',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Credit Notes',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Apply Credit Notes',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Refund Credits',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },

        {
          name: 'Bills',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Vendor Payments',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Debit Notes',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
        {
          name: 'Apply Debit Notes',
          success: 0,
          failure: 0,
          parsed: 0,
          percent: 0,
          total: 0,
          errors:{},
          totalChecker: true,
          errorChecker:true
        },
      ]},

  init() {
    this._super(...arguments);
    this.get('storage').set('parsedArray',[]);
    this.send('makeNetworkCall');


  },
  actions: {
    async makeNetworkCall() {

      let res = await fetch("http://localhost:8080/Migration/AuthServlet?auth=" + this.get('storage').get('auth') + "&org=" + this.get('storage').get('orgId') + "&para=" + this.get('storage').get('prevOrg') + "&continueMigration=" + this.get('storage').get('isRecentMigration'));
      let response = await res.json();
      this.get('storage').set('moduleNamesMap',this.get('TotalModuleMap')[this.get('storage').get('prevOrg')]);
      this.set('migrateFrom',this.storage.get('moduleNamesMap'));
      this.storage.set('moduleNamesMap',[]);
      this.set('parseCompleted', response.parseCompleted)

      if (this.get('parseCompleted')) {

        for (let i = 0; i < this.get('migrateFrom').length; i++) {

          let currentModule =this.get('migrateFrom')[i];
          let res = await fetch(`/Migration/Servletcall?servlet=${currentModule.name}`);
          let response = await res.json();
          let total = response.total;
          let completed = response.completed;
          let remainingRecords = total - completed;
          if (total == 0) {
            set(currentModule, 'total', null);
            set(currentModule, 'totalChecker', false);
          } else if (remainingRecords == 0) {
             set(currentModule, 'percent', 100);
             set(currentModule, 'parsed', completed);
             set(currentModule, 'totalChecker', true);
             set(currentModule, 'success', completed);
             set(currentModule, 'failure', 0);
             set(currentModule, 'total', total);

          } else {
            set(currentModule, 'totalChecker', true);
            let dataToBeRequested = response.json;
            let record_size = total;
            let migrated_data = completed;
            let success = completed;
            let failure = 0;
            let percentage_value = 0;

            for (let index = 0; index < dataToBeRequested.length; index++) {
              let key = dataToBeRequested[index];

              let body = {
                key,
                'module_name':currentModule.name
              };
              await fetch(`/Migration/Servletcall?servlet=Migrate`, {
                  method: 'post',
                  body: JSON.stringify(body)
                })
                .then(response => response.json())
                .then((response) => {
                  if (response.code !== 0) {
                    failure++;
                    set(currentModule, 'failure', failure);
                    if(response.code in currentModule.errors)
                    {
                      currentModule.errors[response.code].pushObject(response);
                    }
                    else {
                      currentModule.errors[response.code]=[response];
                    }

                  } else {
                    success++;
                    set(currentModule, 'success', success);
                  }
                });
              migrated_data++;
              set(currentModule, 'parsed', migrated_data);
              set(currentModule, 'total', record_size);
              percentage_value = (migrated_data / record_size) * 100;
              percentage_value = Math.round(percentage_value);
              set(currentModule, 'percent', percentage_value);
            }
              if(currentModule.failure===0)
              {
                set(currentModule,'errorChecker',true);
              }
              else {
                set(currentModule,'errorChecker',false);
              }

          }
        
         this.storage.set(`moduleNamesMap`,[...this.storage.get('moduleNamesMap'),currentModule]);

}
} else {
        this.get('notification').error('File Not Parsed', {
          clearDuration: 1200
        });
        this.transitionToRoute("home");
      }
    },

  }
});
