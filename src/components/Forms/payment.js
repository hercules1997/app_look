import React, {useEffect, useRef, useState} from 'react'
import {Box, Input, Spacer, Text, Title, Touchable} from '..'
import SegmentedPicker from 'react-native-segmented-picker'

const PaymentForm = ({onChange = creditCard => {}}) => {
  const pickerRef = useRef(null)
  const [data, setData] = useState({
    holder_name: '',
    credit_card_number: '',
    valid_date: '',
    cvv: ''
  })

  useEffect(() => {
    onChange(data)
  }, [data])
  return (
    <>
      <SegmentedPicker
        ref={pickerRef}
        onConfirm={data =>
          setData({
            ...data,
            valid_date: `${data.month}]/${data.year}`
          })
        }
        options={[
          {
            key: 'month',
            items: [
              {label: 'Jan', value: 'jan'},
              {label: 'Fev', value: 'fev'},
              {label: 'mar', value: 'mar'},
              {label: 'abr', value: 'abr'},
              {label: 'mai', value: 'mai'}
            ]
          },
          {
            key: 'year',
            items: [
              {label: '2019', value: '2019'},
              {label: '2020', value: '2020'},
              {label: '2021', value: '2021'},
              {label: '2022', value: '2022'},
              {label: '2023', value: '2023'}
            ]
          }
        ]}
      />
      <Box>
        <Title variant="small">Select and enter your payment details</Title>
        <Spacer />
        <Text>By continuing you agree to our Term</Text>
        <Spacer size="20px" />
        <Input
          placeholder="Holder Name"
          value={data.holder_name}
          onChangeText={holder_name =>
            setData({
              ...data,
              holder_name
            })
          }
        />
        <Spacer />

        <Input
          placeholder="Credit Card Number"
          value={data.number}
          onChangeText={number =>
            setData({
              ...data,
              number
            })
          }
        />
        <Spacer />
        <Touchable width="100%" onPress={() => pickerRef.current.show()}>
          <Input editable={false} pointerEvents="none" placeholder="09/2025" />
        </Touchable>

        <Spacer />
        <Box row>
          <Box spacing="0px 5px 0px 0px">
            <Input
              placeholder="CVV"
              value={data.cvv}
              onChangeText={cvv =>
                setData({
                  ...data,
                  cvv
                })
              }
            />
          </Box>
          <Box variant="small">
            <Text>3 or 4 digits usually found on the signature strip</Text>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default PaymentForm
