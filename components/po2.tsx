import React from "react";

type Props = {};

const po2 = (props: Props) => {
	return (
		<div>
			{/* *****************************************     PO:2       ****************************************/}

			<tr className='m-4'>
				<td rowSpan={13}>
					<Textarea readOnly value={editedTable?.po21} className='my-6' />
				</td>
				<td rowSpan={3}>
					<Textarea readOnly value={editedTable?.competency21} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators21} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight21} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co121}
						onChange={handleCo121Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co221}
						onChange={handleCo221Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co321}
						onChange={handleCo321Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co421}
						onChange={handleCo421Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co521}
						onChange={handleCo521Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co621}
						onChange={handleCo621Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co721}
						onChange={handleCo721Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators22} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight22} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co122}
						onChange={handleCo122Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co222}
						onChange={handleCo222Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co322}
						onChange={handleCo322Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co422}
						onChange={handleCo422Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co522}
						onChange={handleCo522Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co622}
						onChange={handleCo622Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co722}
						onChange={handleCo722Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators23} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight23} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co123}
						onChange={handleCo123Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co223}
						onChange={handleCo223Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co323}
						onChange={handleCo323Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co423}
						onChange={handleCo423Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co523}
						onChange={handleCo523Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co623}
						onChange={handleCo623Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co723}
						onChange={handleCo723Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td rowSpan={4}>
					<Textarea readOnly value={editedTable?.competency22} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators24} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight24} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co124}
						onChange={handleCo124Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co224}
						onChange={handleCo224Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co324}
						onChange={handleCo324Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co424}
						onChange={handleCo424Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co524}
						onChange={handleCo524Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co624}
						onChange={handleCo624Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co724}
						onChange={handleCo724Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators25} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight25} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co125}
						onChange={handleCo125Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co225}
						onChange={handleCo225Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co325}
						onChange={handleCo325Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co425}
						onChange={handleCo425Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co525}
						onChange={handleCo525Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co625}
						onChange={handleCo625Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co725}
						onChange={handleCo725Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators26} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight26} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co126}
						onChange={handleCo126Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co226}
						onChange={handleCo226Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co326}
						onChange={handleCo326Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co426}
						onChange={handleCo426Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co526}
						onChange={handleCo526Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co626}
						onChange={handleCo626Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co726}
						onChange={handleCo726Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators27} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight27} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co127}
						onChange={handleCo127Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co227}
						onChange={handleCo227Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co327}
						onChange={handleCo327Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co427}
						onChange={handleCo427Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co527}
						onChange={handleCo527Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co627}
						onChange={handleCo627Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co727}
						onChange={handleCo727Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td rowSpan={2}>
					<Textarea readOnly value={editedTable?.competency23} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators28} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight28} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co128}
						onChange={handleCo128Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co228}
						onChange={handleCo228Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co328}
						onChange={handleCo328Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co428}
						onChange={handleCo428Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co528}
						onChange={handleCo528Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co628}
						onChange={handleCo628Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co728}
						onChange={handleCo728Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators29} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight29} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co129}
						onChange={handleCo129Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co229}
						onChange={handleCo229Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co329}
						onChange={handleCo329Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co429}
						onChange={handleCo429Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co529}
						onChange={handleCo529Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co629}
						onChange={handleCo629Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co729}
						onChange={handleCo729Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td rowSpan={4}>
					<Textarea readOnly value={editedTable?.competency24} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators210} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight210} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1210}
						onChange={handleCo1210Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2210}
						onChange={handleCo2210Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3210}
						onChange={handleCo3210Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4210}
						onChange={handleCo4210Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5210}
						onChange={handleCo5210Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6210}
						onChange={handleCo6210Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7210}
						onChange={handleCo7210Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators211} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight211} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1211}
						onChange={handleCo1211Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2211}
						onChange={handleCo2211Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3211}
						onChange={handleCo3211Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4211}
						onChange={handleCo4211Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5211}
						onChange={handleCo5211Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6211}
						onChange={handleCo6211Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7211}
						onChange={handleCo7211Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators212} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight212} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1212}
						onChange={handleCo1212Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2212}
						onChange={handleCo2212Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3212}
						onChange={handleCo3212Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4212}
						onChange={handleCo4212Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5212}
						onChange={handleCo5212Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6212}
						onChange={handleCo6212Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7212}
						onChange={handleCo7212Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators213} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight213} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1213}
						onChange={handleCo1213Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2213}
						onChange={handleCo2213Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3213}
						onChange={handleCo3213Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4213}
						onChange={handleCo4213Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5213}
						onChange={handleCo5213Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6213}
						onChange={handleCo6213Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7213}
						onChange={handleCo7213Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td colSpan={4}>
					<Textarea readOnly value='PO2 : Mapping Level' className='my-6' />
				</td>

				<td>
					<Input type='number' value={editedTable?.po2mapco1} readOnly />
				</td>
				<td>
					<Input type='number' value={editedTable?.po2mapco2} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po2mapco3} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po2mapco4} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po2mapco5} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po2mapco6} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po2mapco7} readOnly />{" "}
				</td>
			</tr>

			{/* **************************************       PO:3         ****************************************************/}

			<tr className='m-4'>
				<td rowSpan={13}>
					<Textarea readOnly value={editedTable?.po31} className='my-6' />
				</td>
				<td rowSpan={6}>
					<Textarea readOnly value={editedTable?.competency31} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators31} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight31} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co131}
						onChange={handleCo131Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co231}
						onChange={handleCo231Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co331}
						onChange={handleCo331Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co431}
						onChange={handleCo431Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co531}
						onChange={handleCo531Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co631}
						onChange={handleCo631Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co731}
						onChange={handleCo731Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators32} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight32} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co132}
						onChange={handleCo132Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co232}
						onChange={handleCo232Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co332}
						onChange={handleCo332Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co432}
						onChange={handleCo432Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co532}
						onChange={handleCo532Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co632}
						onChange={handleCo632Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co732}
						onChange={handleCo732Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators33} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight33} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co133}
						onChange={handleCo133Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co233}
						onChange={handleCo233Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co333}
						onChange={handleCo333Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co433}
						onChange={handleCo433Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co533}
						onChange={handleCo533Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co633}
						onChange={handleCo633Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co733}
						onChange={handleCo733Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators34} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight34} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co134}
						onChange={handleCo134Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co234}
						onChange={handleCo234Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co334}
						onChange={handleCo334Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co434}
						onChange={handleCo434Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co534}
						onChange={handleCo534Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co634}
						onChange={handleCo634Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co734}
						onChange={handleCo734Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators35} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight35} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co135}
						onChange={handleCo135Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co235}
						onChange={handleCo235Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co335}
						onChange={handleCo335Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co435}
						onChange={handleCo435Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co535}
						onChange={handleCo535Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co635}
						onChange={handleCo635Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co735}
						onChange={handleCo735Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators36} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight36} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co136}
						onChange={handleCo136Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co236}
						onChange={handleCo236Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co336}
						onChange={handleCo336Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co436}
						onChange={handleCo436Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co536}
						onChange={handleCo536Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co636}
						onChange={handleCo636Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co736}
						onChange={handleCo736Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td rowSpan={3}>
					<Textarea readOnly value={editedTable?.competency32} />
				</td>

				<td>
					<Textarea readOnly value={editedTable?.indicators37} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight37} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co137}
						onChange={handleCo137Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co237}
						onChange={handleCo237Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co337}
						onChange={handleCo337Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co437}
						onChange={handleCo437Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co537}
						onChange={handleCo537Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co637}
						onChange={handleCo637Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co737}
						onChange={handleCo737Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators38} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight38} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co138}
						onChange={handleCo138Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co238}
						onChange={handleCo238Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co338}
						onChange={handleCo338Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co438}
						onChange={handleCo438Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co538}
						onChange={handleCo538Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co638}
						onChange={handleCo638Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co738}
						onChange={handleCo738Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators39} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight39} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co139}
						onChange={handleCo139Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co239}
						onChange={handleCo239Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co339}
						onChange={handleCo339Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co439}
						onChange={handleCo439Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co539}
						onChange={handleCo539Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co639}
						onChange={handleCo639Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co739}
						onChange={handleCo739Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td rowSpan={2}>
					<Textarea readOnly value={editedTable?.competency33} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators310} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight310} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1310}
						onChange={handleCo1310Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2310}
						onChange={handleCo2310Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3310}
						onChange={handleCo3310Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4310}
						onChange={handleCo4310Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5310}
						onChange={handleCo5310Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6310}
						onChange={handleCo6310Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7310}
						onChange={handleCo7310Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators311} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight311} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1311}
						onChange={handleCo1311Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2311}
						onChange={handleCo2311Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3311}
						onChange={handleCo3311Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4311}
						onChange={handleCo4311Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5311}
						onChange={handleCo5311Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6311}
						onChange={handleCo6311Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7311}
						onChange={handleCo7311Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td rowSpan={2}>
					<Textarea readOnly value={editedTable?.competency34} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators312} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight312} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1312}
						onChange={handleCo1312Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2312}
						onChange={handleCo2312Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3312}
						onChange={handleCo3312Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4312}
						onChange={handleCo4312Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5312}
						onChange={handleCo5312Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6312}
						onChange={handleCo6312Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7312}
						onChange={handleCo7312Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators313} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight313} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1313}
						onChange={handleCo1313Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2313}
						onChange={handleCo2313Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3313}
						onChange={handleCo3313Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4313}
						onChange={handleCo4313Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5313}
						onChange={handleCo5313Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6313}
						onChange={handleCo6313Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7313}
						onChange={handleCo7313Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td colSpan={4}>
					<Textarea readOnly value='PO3 : Mapping Level' className='my-6' />
				</td>

				<td>
					<Input type='number' value={editedTable?.po3mapco1} readOnly />
				</td>
				<td>
					<Input type='number' value={editedTable?.po3mapco2} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po3mapco3} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po3mapco4} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po3mapco5} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po3mapco6} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po3mapco7} readOnly />{" "}
				</td>
			</tr>
			{/* **************************************       PO:4        ****************************************************/}

			<tr className='m-4'>
				<td rowSpan={10}>
					<Textarea readOnly value={editedTable?.po41} className='my-6' />
				</td>
				<td rowSpan={4}>
					<Textarea readOnly value={editedTable?.competency41} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators41} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight41} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co141}
						onChange={handleCo141Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co241}
						onChange={handleCo241Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co341}
						onChange={handleCo341Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co441}
						onChange={handleCo441Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co541}
						onChange={handleCo541Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co641}
						onChange={handleCo641Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co741}
						onChange={handleCo741Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators42} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight42} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co142}
						onChange={handleCo142Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co242}
						onChange={handleCo242Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co342}
						onChange={handleCo342Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co442}
						onChange={handleCo442Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co542}
						onChange={handleCo542Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co642}
						onChange={handleCo642Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co742}
						onChange={handleCo742Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators43} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight43} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co143}
						onChange={handleCo143Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co243}
						onChange={handleCo243Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co343}
						onChange={handleCo343Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co443}
						onChange={handleCo443Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co543}
						onChange={handleCo543Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co643}
						onChange={handleCo643Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co743}
						onChange={handleCo743Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators44} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight44} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co144}
						onChange={handleCo144Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co244}
						onChange={handleCo244Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co344}
						onChange={handleCo344Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co444}
						onChange={handleCo444Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co544}
						onChange={handleCo544Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co644}
						onChange={handleCo644Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co744}
						onChange={handleCo744Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td rowSpan={2}>
					<Textarea readOnly value={editedTable?.competency42} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators45} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight45} readOnly />
				</td>
				<td>
					<Input
						type='number'
						onChange={handleCo145Change}
						value={editedTable?.co145}
					/>
				</td>
				<td>
					<Input
						type='number'
						onChange={handleCo245Change}
						value={editedTable?.co245}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co345}
						onChange={handleCo345Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co445}
						onChange={handleCo445Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co545}
						onChange={handleCo545Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co645}
						onChange={handleCo645Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co745}
						onChange={handleCo745Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators46} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight46} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co146}
						onChange={handleCo146Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co246}
						onChange={handleCo246Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co346}
						onChange={handleCo346Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co446}
						onChange={handleCo446Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co546}
						onChange={handleCo546Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co646}
						onChange={handleCo646Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co746}
						onChange={handleCo746Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td rowSpan={4}>
					<Textarea readOnly value={editedTable?.competency43} />
				</td>

				<td>
					<Textarea readOnly value={editedTable?.indicators47} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight47} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co147}
						onChange={handleCo147Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co247}
						onChange={handleCo247Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co347}
						onChange={handleCo347Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co447}
						onChange={handleCo447Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co547}
						onChange={handleCo547Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co647}
						onChange={handleCo647Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co747}
						onChange={handleCo747Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators48} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight48} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co148}
						onChange={handleCo148Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co248}
						onChange={handleCo248Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co348}
						onChange={handleCo348Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co448}
						onChange={handleCo448Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co548}
						onChange={handleCo548Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co648}
						onChange={handleCo648Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co748}
						onChange={handleCo748Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators49} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight49} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co149}
						onChange={handleCo149Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co249}
						onChange={handleCo249Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co349}
						onChange={handleCo349Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co449}
						onChange={handleCo449Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co549}
						onChange={handleCo549Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co649}
						onChange={handleCo649Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co749}
						onChange={handleCo749Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators410} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight410} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1410}
						onChange={handleCo1410Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2410}
						onChange={handleCo2410Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3410}
						onChange={handleCo3410Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4410}
						onChange={handleCo4410Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5410}
						onChange={handleCo5410Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6410}
						onChange={handleCo6410Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7410}
						onChange={handleCo7410Change}
					/>
				</td>
			</tr>

			<tr className='m-4'>
				<td colSpan={4}>
					<Textarea readOnly value='PO4 : Mapping Level' className='my-6' />
				</td>

				<td>
					<Input type='number' value={editedTable?.po4mapco1} readOnly />
				</td>
				<td>
					<Input type='number' value={editedTable?.po4mapco2} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po4mapco3} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po4mapco4} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po4mapco5} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po4mapco6} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po4mapco7} readOnly />{" "}
				</td>
			</tr>
			{/* **************************************       PO:5        ****************************************************/}

			<tr className='m-4'>
				<td rowSpan={6}>
					<Textarea readOnly value={editedTable?.po51} className='my-6' />
				</td>
				<td rowSpan={2}>
					<Textarea readOnly value={editedTable?.competency51} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators51} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight51} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co151}
						onChange={handleCo151Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co251}
						onChange={handleCo251Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co351}
						onChange={handleCo351Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co451}
						onChange={handleCo451Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co551}
						onChange={handleCo551Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co651}
						onChange={handleCo651Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co751}
						onChange={handleCo751Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators52} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight52} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co152}
						onChange={handleCo152Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co252}
						onChange={handleCo252Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co352}
						onChange={handleCo352Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co452}
						onChange={handleCo452Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co552}
						onChange={handleCo552Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co652}
						onChange={handleCo652Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co752}
						onChange={handleCo752Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td rowSpan={2}>
					<Textarea readOnly value={editedTable?.competency52} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators53} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight53} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co153}
						onChange={handleCo153Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co253}
						onChange={handleCo253Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co353}
						onChange={handleCo253Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co453}
						onChange={handleCo353Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co553}
						onChange={handleCo453Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co653}
						onChange={handleCo553Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co753}
						onChange={handleCo753Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators54} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight54} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co154}
						onChange={handleCo154Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co254}
						onChange={handleCo254Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co354}
						onChange={handleCo354Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co454}
						onChange={handleCo454Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co554}
						onChange={handleCo554Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co654}
						onChange={handleCo654Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co754}
						onChange={handleCo754Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td rowSpan={2}>
					<Textarea readOnly value={editedTable?.competency53} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators55} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight55} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co155}
						onChange={handleCo155Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co255}
						onChange={handleCo255Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co355}
						onChange={handleCo355Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co455}
						onChange={handleCo455Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co555}
						onChange={handleCo555Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co655}
						onChange={handleCo655Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co755}
						onChange={handleCo755Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators56} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight56} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co156}
						onChange={handleCo156Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co256}
						onChange={handleCo256Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co356}
						onChange={handleCo356Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co456}
						onChange={handleCo456Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co556}
						onChange={handleCo556Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co656}
						onChange={handleCo656Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co756}
						onChange={handleCo756Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td colSpan={4}>
					<Textarea readOnly value='PO5 : Mapping Level' className='my-6' />
				</td>

				<td>
					<Input type='number' value={editedTable?.po5mapco1} readOnly />
				</td>
				<td>
					<Input type='number' value={editedTable?.po5mapco2} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po5mapco3} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po5mapco4} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po5mapco5} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po5mapco6} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po5mapco7} readOnly />{" "}
				</td>
			</tr>
			{/* **************************************       PO:6        ****************************************************/}

			<tr className='m-4'>
				<td rowSpan={2}>
					<Textarea readOnly value={editedTable?.po61} className='my-6' />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.competency61} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators61} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight61} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co161}
						onChange={handleCo161Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co261}
						onChange={handleCo261Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co361}
						onChange={handleCo361Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co461}
						onChange={handleCo461Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co561}
						onChange={handleCo561Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co661}
						onChange={handleCo661Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co761}
						onChange={handleCo761Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.competency62} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators62} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight62} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co162}
						onChange={handleCo162Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co262}
						onChange={handleCo262Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co362}
						onChange={handleCo362Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co462}
						onChange={handleCo462Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co562}
						onChange={handleCo562Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co662}
						onChange={handleCo662Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co762}
						onChange={handleCo762Change}
					/>
				</td>
			</tr>

			<tr className='m-4'>
				<td colSpan={4}>
					<Textarea readOnly value='PO6 : Mapping Level' className='my-6' />
				</td>

				<td>
					<Input type='number' value={editedTable?.po6mapco1} readOnly />
				</td>
				<td>
					<Input type='number' value={editedTable?.po6mapco2} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po6mapco3} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po6mapco4} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po6mapco5} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po6mapco6} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po6mapco7} readOnly />{" "}
				</td>
			</tr>

			{/* **************************************       PO: 7        ****************************************************/}

			<tr className='m-4'>
				<td rowSpan={4}>
					<Textarea readOnly value={editedTable?.po71} className='my-6' />
				</td>
				<td rowSpan={2}>
					<Textarea readOnly value={editedTable?.competency71} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators71} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight71} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co171}
						onChange={handleCo171Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co271}
						onChange={handleCo271Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co371}
						onChange={handleCo371Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co471}
						onChange={handleCo471Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co571}
						onChange={handleCo571Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co671}
						onChange={handleCo671Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co771}
						onChange={handleCo771Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators72} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight72} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co172}
						onChange={handleCo172Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co272}
						onChange={handleCo272Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co372}
						onChange={handleCo372Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co472}
						onChange={handleCo472Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co572}
						onChange={handleCo572Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co672}
						onChange={handleCo672Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co772}
						onChange={handleCo772Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td rowSpan={2}>
					<Textarea readOnly value={editedTable?.competency72} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators73} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight73} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co173}
						onChange={handleCo173Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co273}
						onChange={handleCo273Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co373}
						onChange={handleCo373Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co473}
						onChange={handleCo473Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co573}
						onChange={handleCo573Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co673}
						onChange={handleCo673Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co773}
						onChange={handleCo773Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators74} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight74} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co174}
						onChange={handleCo174Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co274}
						onChange={handleCo274Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co374}
						onChange={handleCo374Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co474}
						onChange={handleCo474Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co574}
						onChange={handleCo574Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co674}
						onChange={handleCo674Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co774}
						onChange={handleCo774Change}
					/>
				</td>
			</tr>

			<tr className='m-4'>
				<td colSpan={4}>
					<Textarea readOnly value='PO7 : Mapping Level' className='my-6' />
				</td>

				<td>
					<Input type='number' value={editedTable?.po7mapco1} readOnly />
				</td>
				<td>
					<Input type='number' value={editedTable?.po7mapco2} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po7mapco3} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po7mapco4} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po7mapco5} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po7mapco6} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po7mapco7} readOnly />{" "}
				</td>
			</tr>
			{/* **************************************       PO: 8        ****************************************************/}

			<tr className='m-4'>
				<td rowSpan={3}>
					<Textarea readOnly value={editedTable?.po81} className='my-6' />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.competency81} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators81} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight81} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co181}
						onChange={handleCo181Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co281}
						onChange={handleCo281Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co381}
						onChange={handleCo381Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co481}
						onChange={handleCo481Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co581}
						onChange={handleCo581Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co681}
						onChange={handleCo681Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co781}
						onChange={handleCo781Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td rowSpan={2}>
					<Textarea readOnly value={editedTable?.competency82} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators82} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight82} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co182}
						onChange={handleCo182Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co282}
						onChange={handleCo282Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co382}
						onChange={handleCo382Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co482}
						onChange={handleCo482Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co582}
						onChange={handleCo582Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co682}
						onChange={handleCo682Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co782}
						onChange={handleCo782Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators83} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight83} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co183}
						onChange={handleCo183Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co283}
						onChange={handleCo283Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co383}
						onChange={handleCo383Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co483}
						onChange={handleCo483Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co583}
						onChange={handleCo583Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co683}
						onChange={handleCo683Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co783}
						onChange={handleCo783Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td colSpan={4}>
					<Textarea readOnly value='PO8 : Mapping Level' className='my-6' />
				</td>

				<td>
					<Input type='number' value={editedTable?.po8mapco1} readOnly />
				</td>
				<td>
					<Input type='number' value={editedTable?.po8mapco2} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po8mapco3} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po8mapco4} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po8mapco5} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po8mapco6} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po8mapco7} readOnly />{" "}
				</td>
			</tr>

			{/* **************************************       PO:9        ****************************************************/}

			<tr className='m-4'>
				<td rowSpan={7}>
					<Textarea readOnly value={editedTable?.po91} className='my-6' />
				</td>
				<td rowSpan={2}>
					<Textarea readOnly value={editedTable?.competency91} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators91} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight91} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co191}
						onChange={handleCo191Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co291}
						onChange={handleCo291Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co391}
						onChange={handleCo391Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co491}
						onChange={handleCo491Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co591}
						onChange={handleCo591Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co691}
						onChange={handleCo691Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co791}
						onChange={handleCo791Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators92} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight92} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co192}
						onChange={handleCo192Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co292}
						onChange={handleCo292Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co392}
						onChange={handleCo392Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co492}
						onChange={handleCo492Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co592}
						onChange={handleCo592Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co692}
						onChange={handleCo692Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co792}
						onChange={handleCo792Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td rowSpan={4}>
					<Textarea readOnly value={editedTable?.competency92} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators93} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight93} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co193}
						onChange={handleCo193Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co293}
						onChange={handleCo293Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co393}
						onChange={handleCo393Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co493}
						onChange={handleCo493Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co593}
						onChange={handleCo593Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co693}
						onChange={handleCo693Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co793}
						onChange={handleCo793Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators94} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight94} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co194}
						onChange={handleCo194Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co294}
						onChange={handleCo294Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co394}
						onChange={handleCo394Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co494}
						onChange={handleCo494Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co594}
						onChange={handleCo594Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co694}
						onChange={handleCo694Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co794}
						onChange={handleCo794Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators95} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight95} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co195}
						onChange={handleCo195Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co295}
						onChange={handleCo295Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co395}
						onChange={handleCo395Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co495}
						onChange={handleCo495Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co595}
						onChange={handleCo595Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co695}
						onChange={handleCo695Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co795}
						onChange={handleCo795Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators96} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight96} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co196}
						onChange={handleCo196Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co296}
						onChange={handleCo296Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co396}
						onChange={handleCo396Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co496}
						onChange={handleCo496Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co596}
						onChange={handleCo596Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co696}
						onChange={handleCo696Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co796}
						onChange={handleCo796Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.competency93} />
				</td>

				<td>
					<Textarea readOnly value={editedTable?.indicators97} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight97} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co197}
						onChange={handleCo197Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co297}
						onChange={handleCo297Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co397}
						onChange={handleCo397Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co497}
						onChange={handleCo497Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co597}
						onChange={handleCo597Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co697}
						onChange={handleCo697Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co797}
						onChange={handleCo797Change}
					/>
				</td>
			</tr>

			<tr className='m-4'>
				<td colSpan={4}>
					<Textarea readOnly value='PO9 : Mapping Level' className='my-6' />
				</td>

				<td>
					<Input type='number' value={editedTable?.po9mapco1} readOnly />
				</td>
				<td>
					<Input type='number' value={editedTable?.po9mapco2} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po9mapco3} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po9mapco4} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po9mapco5} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po9mapco6} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po9mapco7} readOnly />{" "}
				</td>
			</tr>

			{/* **************************************       PO:10        ****************************************************/}

			<tr className='m-4'>
				<td rowSpan={7}>
					<Textarea readOnly value={editedTable?.po101} className='my-6' />
				</td>
				<td rowSpan={3}>
					<Textarea readOnly value={editedTable?.competency101} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators101} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight101} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1101}
						onChange={handleCo1101Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2101}
						onChange={handleCo2101Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3101}
						onChange={handleCo3101Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4101}
						onChange={handleCo4101Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5101}
						onChange={handleCo5101Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6101}
						onChange={handleCo6101Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7101}
						onChange={handleCo7101Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators102} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight102} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1102}
						onChange={handleCo1102Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2102}
						onChange={handleCo2102Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3102}
						onChange={handleCo3102Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4102}
						onChange={handleCo4102Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5102}
						onChange={handleCo5102Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6102}
						onChange={handleCo6102Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7102}
						onChange={handleCo7102Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators103} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight103} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1103}
						onChange={handleCo1103Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2103}
						onChange={handleCo2103Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3103}
						onChange={handleCo3103Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4103}
						onChange={handleCo4103Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5103}
						onChange={handleCo5103Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6103}
						onChange={handleCo6103Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7103}
						onChange={handleCo7103Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td rowSpan={2}>
					<Textarea readOnly value={editedTable?.competency102} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators104} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight104} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1104}
						onChange={handleCo1104Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2104}
						onChange={handleCo2104Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3104}
						onChange={handleCo3104Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4104}
						onChange={handleCo4104Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5104}
						onChange={handleCo5104Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6104}
						onChange={handleCo6104Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7104}
						onChange={handleCo7104Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators105} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight105} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1105}
						onChange={handleCo1105Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2105}
						onChange={handleCo2105Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3105}
						onChange={handleCo3105Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4105}
						onChange={handleCo4105Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5105}
						onChange={handleCo5105Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6105}
						onChange={handleCo6105Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7105}
						onChange={handleCo7105Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td rowSpan={2}>
					<Textarea readOnly value={editedTable?.competency103} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators106} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight106} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1106}
						onChange={handleCo1106Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2106}
						onChange={handleCo2106Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3106}
						onChange={handleCo3106Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4106}
						onChange={handleCo4106Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5106}
						onChange={handleCo5106Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6106}
						onChange={handleCo6106Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7106}
						onChange={handleCo7106Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators107} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight107} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1107}
						onChange={handleCo1107Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2107}
						onChange={handleCo2107Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3107}
						onChange={handleCo3107Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4107}
						onChange={handleCo4107Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5107}
						onChange={handleCo5107Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6107}
						onChange={handleCo6107Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7107}
						onChange={handleCo7107Change}
					/>
				</td>
			</tr>

			<tr className='m-4'>
				<td colSpan={4}>
					<Textarea readOnly value='PO10 : Mapping Level' className='my-6' />
				</td>

				<td>
					<Input type='number' value={editedTable?.po10mapco1} readOnly />
				</td>
				<td>
					<Input type='number' value={editedTable?.po10mapco2} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po10mapco3} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po10mapco4} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po10mapco5} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po10mapco6} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po10mapco7} readOnly />{" "}
				</td>
			</tr>

			{/* **************************************       PO:11        ****************************************************/}

			<tr className='m-4'>
				<td rowSpan={5}>
					<Textarea readOnly value={editedTable?.po111} className='my-6' />
				</td>
				<td rowSpan={2}>
					<Textarea readOnly value={editedTable?.competency111} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators111} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight111} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1111}
						onChange={handleCo1111Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2111}
						onChange={handleCo2111Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3111}
						onChange={handleCo3111Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4111}
						onChange={handleCo4111Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5111}
						onChange={handleCo5111Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6111}
						onChange={handleCo6111Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7111}
						onChange={handleCo7111Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators112} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight112} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1112}
						onChange={handleCo1112Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2112}
						onChange={handleCo2112Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3112}
						onChange={handleCo3112Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4112}
						onChange={handleCo4112Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5112}
						onChange={handleCo5112Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6112}
						onChange={handleCo6112Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7112}
						onChange={handleCo7112Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.competency112} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators113} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight113} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1113}
						onChange={handleCo1113Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2113}
						onChange={handleCo2113Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3113}
						onChange={handleCo3113Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4113}
						onChange={handleCo4113Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5113}
						onChange={handleCo5113Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6113}
						onChange={handleCo6113Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7113}
						onChange={handleCo7113Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td rowSpan={2}>
					<Textarea readOnly value={editedTable?.competency113} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators114} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight114} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1114}
						onChange={handleCo1114Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2114}
						onChange={handleCo2114Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3114}
						onChange={handleCo3114Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4114}
						onChange={handleCo4114Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5114}
						onChange={handleCo5114Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6114}
						onChange={handleCo6114Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7114}
						onChange={handleCo7114Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators115} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight115} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1115}
						onChange={handleCo1115Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2115}
						onChange={handleCo2115Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3115}
						onChange={handleCo3115Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4115}
						onChange={handleCo4115Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5115}
						onChange={handleCo5115Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6115}
						onChange={handleCo6115Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7115}
						onChange={handleCo7115Change}
					/>
				</td>
			</tr>

			<tr className='m-4'>
				<td colSpan={4}>
					<Textarea readOnly value='PO11 : Mapping Level' className='my-6' />
				</td>

				<td>
					<Input type='number' value={editedTable?.po11mapco1} readOnly />
				</td>
				<td>
					<Input type='number' value={editedTable?.po11mapco2} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po11mapco3} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po11mapco4} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po11mapco5} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po11mapco6} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po11mapco7} readOnly />{" "}
				</td>
			</tr>

			{/* **************************************       PO:12        ****************************************************/}

			<tr className='m-4'>
				<td rowSpan={6}>
					<Textarea readOnly value={editedTable?.po121} className='my-6' />
				</td>
				<td rowSpan={2}>
					<Textarea readOnly value={editedTable?.competency121} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators121} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight121} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1121}
						onChange={handleCo1121Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2121}
						onChange={handleCo2121Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3121}
						onChange={handleCo3121Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4121}
						onChange={handleCo4121Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5121}
						onChange={handleCo5121Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6121}
						onChange={handleCo6121Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7121}
						onChange={handleCo7121Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators122} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight122} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1122}
						onChange={handleCo1122Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2122}
						onChange={handleCo2122Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3122}
						onChange={handleCo3122Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4122}
						onChange={handleCo4122Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5122}
						onChange={handleCo5122Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6122}
						onChange={handleCo6122Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7122}
						onChange={handleCo7122Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td rowSpan={2}>
					<Textarea readOnly value={editedTable?.competency122} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators123} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight123} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1123}
						onChange={handleCo1123Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2123}
						onChange={handleCo2123Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3123}
						onChange={handleCo3123Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4123}
						onChange={handleCo4123Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5123}
						onChange={handleCo5123Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6123}
						onChange={handleCo6123Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7123}
						onChange={handleCo7123Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators124} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.weight124} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1124}
						onChange={handleCo1124Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2124}
						onChange={handleCo2124Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3124}
						onChange={handleCo3124Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4124}
						onChange={handleCo4124Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5124}
						onChange={handleCo5124Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6124}
						onChange={handleCo6124Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7124}
						onChange={handleCo7124Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td rowSpan={2}>
					<Textarea readOnly value={editedTable?.competency123} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.indicators125} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight125} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1125}
						onChange={handleCo1125Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2125}
						onChange={handleCo2125Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3125}
						onChange={handleCo3125Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4125}
						onChange={handleCo4125Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5125}
						onChange={handleCo5125Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6125}
						onChange={handleCo6125Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7125}
						onChange={handleCo7125Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.indicators126} />
				</td>
				<td>
					<Input type='number' value={editedTable?.weight126} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co1126}
						onChange={handleCo1126Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co2126}
						onChange={handleCo2126Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co3126}
						onChange={handleCo3126Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co4126}
						onChange={handleCo4126Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co5126}
						onChange={handleCo5126Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co6126}
						onChange={handleCo6126Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.co7126}
						onChange={handleCo7126Change}
					/>
				</td>
			</tr>

			<tr className='m-4'>
				<td colSpan={4}>
					<Textarea readOnly value='PO12 : Mapping Level' className='my-6' />
				</td>

				<td>
					<Input type='number' value={editedTable?.po12mapco1} readOnly />
				</td>
				<td>
					<Input type='number' value={editedTable?.po12mapco2} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po12mapco3} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po12mapco4} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po12mapco5} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po12mapco6} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.po12mapco7} readOnly />{" "}
				</td>
			</tr>

			{/* ************************************  PSO : 1       ************************************ */}

			<tr className='m-4'>
				<td rowSpan={5}>
					<Textarea readOnly value={editedTable?.pso11} className='my-6' />
				</td>
				<td rowSpan={2}>
					<Textarea readOnly value={editedTable?.psocompetency11} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.psoindicators11} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.psoweight11} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco111}
						onChange={handlePsoCo111Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco211}
						onChange={handlePsoCo211Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco311}
						onChange={handlePsoCo311Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco411}
						onChange={handlePsoCo411Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco511}
						onChange={handlePsoCo511Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco611}
						onChange={handlePsoCo611Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco711}
						onChange={handlePsoCo711Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.psoindicators12} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.psoweight12} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco112}
						onChange={handlePsoCo112Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco212}
						onChange={handlePsoCo212Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco312}
						onChange={handlePsoCo312Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco412}
						onChange={handlePsoCo412Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco512}
						onChange={handlePsoCo512Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco612}
						onChange={handlePsoCo612Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco712}
						onChange={handlePsoCo712Change}
					/>
				</td>
			</tr>

			<tr className='m-4'>
				<td rowSpan={3}>
					<Textarea readOnly value={editedTable?.psocompetency12} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.psoindicators13} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.psoweight13} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco113}
						onChange={handlePsoCo113Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco213}
						onChange={handlePsoCo213Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco313}
						onChange={handlePsoCo313Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco413}
						onChange={handlePsoCo413Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco513}
						onChange={handlePsoCo513Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco613}
						onChange={handlePsoCo613Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco713}
						onChange={handlePsoCo713Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.psoindicators14} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.psoweight14} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco114}
						onChange={handlePsoCo114Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco214}
						onChange={handlePsoCo214Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco314}
						onChange={handlePsoCo314Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco414}
						onChange={handlePsoCo414Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco514}
						onChange={handlePsoCo514Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco614}
						onChange={handlePsoCo614Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco714}
						onChange={handlePsoCo714Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.psoindicators15} />
				</td>
				<td>
					<Input type='number' value={editedTable?.psoweight15} readOnly />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco115}
						onChange={handlePsoCo115Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco215}
						onChange={handlePsoCo215Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco315}
						onChange={handlePsoCo315Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco415}
						onChange={handlePsoCo415Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco515}
						onChange={handlePsoCo515Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco615}
						onChange={handlePsoCo615Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco715}
						onChange={handlePsoCo715Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td colSpan={4}>
					<Textarea readOnly value='PSO 1 : Mapping Level' className='my-6' />
				</td>

				<td>
					<Input type='number' value={editedTable?.pso1mapco1} readOnly />
				</td>
				<td>
					<Input type='number' value={editedTable?.pso1mapco2} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.pso1mapco3} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.pso1mapco4} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.pso1mapco5} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.pso1mapco6} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.pso1mapco7} readOnly />{" "}
				</td>
			</tr>

			{/* ************************************  PSO : 2       ************************************ */}

			<tr className='m-4'>
				<td rowSpan={4}>
					<Textarea readOnly value={editedTable?.pso21} className='my-6' />
				</td>
				<td rowSpan={2}>
					<Textarea readOnly value={editedTable?.psocompetency21} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.psoindicators21} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.psoweight21} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco121}
						onChange={handlePsoCo121Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco221}
						onChange={handlePsoCo221Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco321}
						onChange={handlePsoCo321Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco421}
						onChange={handlePsoCo421Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco521}
						onChange={handlePsoCo521Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco621}
						onChange={handlePsoCo621Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco721}
						onChange={handlePsoCo721Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.psoindicators22} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.psoweight22} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco122}
						onChange={handlePsoCo122Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco222}
						onChange={handlePsoCo222Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco322}
						onChange={handlePsoCo322Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco422}
						onChange={handlePsoCo422Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco522}
						onChange={handlePsoCo522Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco622}
						onChange={handlePsoCo622Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco722}
						onChange={handlePsoCo722Change}
					/>
				</td>
			</tr>

			<tr className='m-4'>
				<td rowSpan={2}>
					<Textarea readOnly value={editedTable?.psocompetency22} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.psoindicators23} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.psoweight23} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco123}
						onChange={handlePsoCo123Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco223}
						onChange={handlePsoCo223Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco323}
						onChange={handlePsoCo323Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco423}
						onChange={handlePsoCo423Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco523}
						onChange={handlePsoCo523Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco623}
						onChange={handlePsoCo623Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco723}
						onChange={handlePsoCo723Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.psoindicators24} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.psoweight24} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco124}
						onChange={handlePsoCo124Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco224}
						onChange={handlePsoCo224Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco324}
						onChange={handlePsoCo324Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco424}
						onChange={handlePsoCo424Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco524}
						onChange={handlePsoCo524Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco624}
						onChange={handlePsoCo624Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco724}
						onChange={handlePsoCo724Change}
					/>
				</td>
			</tr>

			<tr className='m-4'>
				<td colSpan={4}>
					<Textarea readOnly value='PSO 2 : Mapping Level' className='my-6' />
				</td>

				<td>
					<Input type='number' value={editedTable?.pso2mapco1} readOnly />
				</td>
				<td>
					<Input type='number' value={editedTable?.pso2mapco2} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.pso2mapco3} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.pso2mapco4} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.pso2mapco5} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.pso2mapco6} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.pso2mapco7} readOnly />{" "}
				</td>
			</tr>

			{/* ************************************  PSO : 3       ************************************ */}

			<tr className='m-4'>
				<td rowSpan={4}>
					<Textarea readOnly value={editedTable?.pso31} className='my-6' />
				</td>
				<td rowSpan={2}>
					<Textarea readOnly value={editedTable?.psocompetency31} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.psoindicators31} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.psoweight31} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco131}
						onChange={handlePsoCo131Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco231}
						onChange={handlePsoCo231Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco331}
						onChange={handlePsoCo331Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco431}
						onChange={handlePsoCo431Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco531}
						onChange={handlePsoCo531Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco631}
						onChange={handlePsoCo631Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco731}
						onChange={handlePsoCo731Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.psoindicators32} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.psoweight32} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco132}
						onChange={handlePsoCo132Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco232}
						onChange={handlePsoCo232Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco332}
						onChange={handlePsoCo332Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco432}
						onChange={handlePsoCo432Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco532}
						onChange={handlePsoCo532Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco632}
						onChange={handlePsoCo632Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco732}
						onChange={handlePsoCo732Change}
					/>
				</td>
			</tr>

			<tr className='m-4'>
				<td rowSpan={2}>
					<Textarea readOnly value={editedTable?.psocompetency32} />
				</td>
				<td>
					<Textarea readOnly value={editedTable?.psoindicators33} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.psoweight33} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco133}
						onChange={handlePsoCo133Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco233}
						onChange={handlePsoCo233Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco333}
						onChange={handlePsoCo333Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco433}
						onChange={handlePsoCo433Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco533}
						onChange={handlePsoCo533Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco633}
						onChange={handlePsoCo633Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco733}
						onChange={handlePsoCo733Change}
					/>
				</td>
			</tr>
			<tr className='m-4'>
				<td>
					<Textarea readOnly value={editedTable?.psoindicators34} />
				</td>
				<td>
					<Input type='number' readOnly value={editedTable?.psoweight34} />
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco134}
						onChange={handlePsoCo134Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco234}
						onChange={handlePsoCo234Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco334}
						onChange={handlePsoCo334Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco434}
						onChange={handlePsoCo434Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco534}
						onChange={handlePsoCo534Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco634}
						onChange={handlePsoCo634Change}
					/>
				</td>
				<td>
					<Input
						type='number'
						value={editedTable?.psoco734}
						onChange={handlePsoCo734Change}
					/>
				</td>
			</tr>

			<tr className='m-4'>
				<td colSpan={4}>
					<Textarea readOnly value='PSO 3 : Mapping Level' className='my-6' />
				</td>

				<td>
					<Input type='number' value={editedTable?.pso3mapco1} readOnly />
				</td>
				<td>
					<Input type='number' value={editedTable?.pso3mapco2} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.pso3mapco3} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.pso3mapco4} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.pso3mapco5} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.pso3mapco6} readOnly />{" "}
				</td>
				<td>
					<Input type='number' value={editedTable?.pso3mapco7} readOnly />{" "}
				</td>
			</tr>
		</div>
	);
};

export default po2;
