import React from 'react';

import { KeystoneProvider } from '@keystone-next/admin-ui/context';
import { ErrorBoundary } from '@keystone-next/admin-ui/components';
import { Core } from '@keystone-ui/core';

<<<<<<< HEAD
import * as view1dd14475 from '../../../node_modules/@keystone-next/fields/types/mongoId/views';
import * as viewd511c4d5 from '../../../node_modules/@keystone-next/fields/types/text/views';
import * as view8fd27854 from '../../../node_modules/@keystone-next/fields/types/password/views';
import * as viewdca94151 from '../../../node_modules/@keystone-next/fields/types/relationship/views';
import * as view3d102dd9 from '../../../node_modules/@keystone-next/fields/types/timestamp/views';
import * as view6fe3c4de from '../../../node_modules/@keystone-next/fields/types/select/views';
import * as viewc4768746 from '../../../node_modules/@keystone-next/fields/types/integer/views';
import * as viewc39a39fa from '../../../node_modules/@keystone-next/cloudinary/views';
import * as view1662f201 from '../../../node_modules/@keystone-next/fields/types/virtual/views';
=======
import * as viewc4af6ed7 from '../../../node_modules/@keystone-next/fields/types/mongoId/views';
import * as viewedbc19a8 from '../../../node_modules/@keystone-next/fields/types/text/views';
import * as viewff31cbb6 from '../../../node_modules/@keystone-next/fields/types/password/views';
import * as view2f9c3075 from '../../../node_modules/@keystone-next/fields/types/relationship/views';
import * as view37163a3d from '../../../node_modules/@keystone-next/fields/types/timestamp/views';
import * as viewbf908dc6 from '../../../node_modules/@keystone-next/fields/types/select/views';
import * as view8632f765 from '../../../node_modules/@keystone-next/fields/types/integer/views';
import * as view83400b35 from '../../../node_modules/@keystone-next/cloudinary/views';
import * as view3099f692 from '../../../node_modules/@keystone-next/fields/types/virtual/views';
>>>>>>> 174ad752374eaafa0d3858c41c3a9d1cc18ddf1b

const adminConfig = {};

const fieldViews = {
<<<<<<< HEAD
  view1dd14475,
  viewd511c4d5,
  view8fd27854,
  viewdca94151,
  view3d102dd9,
  view6fe3c4de,
  viewc4768746,
  viewc39a39fa,
  view1662f201,
=======
  viewc4af6ed7,
  viewedbc19a8,
  viewff31cbb6,
  view2f9c3075,
  view37163a3d,
  viewbf908dc6,
  view8632f765,
  view83400b35,
  view3099f692,
>>>>>>> 174ad752374eaafa0d3858c41c3a9d1cc18ddf1b
};

const lazyMetadataQuery = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'keystone',
              loc: { start: 22, end: 30 },
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'adminMeta',
                    loc: { start: 39, end: 48 },
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'lists',
                          loc: { start: 59, end: 64 },
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'key',
                                loc: { start: 77, end: 80 },
                              },
                              arguments: [],
                              directives: [],
                              loc: { start: 77, end: 80 },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'isHidden',
                                loc: { start: 91, end: 99 },
                              },
                              arguments: [],
                              directives: [],
                              loc: { start: 91, end: 99 },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'fields',
                                loc: { start: 110, end: 116 },
                              },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'path',
                                      loc: { start: 131, end: 135 },
                                    },
                                    arguments: [],
                                    directives: [],
                                    loc: { start: 131, end: 135 },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'createView',
                                      loc: { start: 148, end: 158 },
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'fieldMode',
                                            loc: { start: 175, end: 184 },
                                          },
                                          arguments: [],
                                          directives: [],
                                          loc: { start: 175, end: 184 },
                                        },
                                      ],
                                      loc: { start: 159, end: 198 },
                                    },
                                    loc: { start: 148, end: 198 },
                                  },
                                ],
                                loc: { start: 117, end: 210 },
                              },
                              loc: { start: 110, end: 210 },
                            },
                          ],
                          loc: { start: 65, end: 220 },
                        },
                        loc: { start: 59, end: 220 },
                      },
                    ],
                    loc: { start: 49, end: 228 },
                  },
                  loc: { start: 39, end: 228 },
                },
              ],
              loc: { start: 31, end: 234 },
            },
            loc: { start: 22, end: 234 },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authenticatedItem' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'User' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};

export default function App({ Component, pageProps }) {
  return (
    <Core>
      <KeystoneProvider
        adminConfig={adminConfig}
<<<<<<< HEAD
        adminMetaHash="z9nuzj"
=======
        adminMetaHash="1hnnifs"
>>>>>>> 174ad752374eaafa0d3858c41c3a9d1cc18ddf1b
        fieldViews={fieldViews}
        lazyMetadataQuery={lazyMetadataQuery}
      >
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </KeystoneProvider>
    </Core>
  );
}
