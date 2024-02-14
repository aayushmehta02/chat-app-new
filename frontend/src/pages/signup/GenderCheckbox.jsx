const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
    	return (
    		<div className='flex align-center justify-center'>
    			<div className='form-control '>
    				<label className={`flex align-center label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
    					<span className='label-text'>Male</span>
    					<input type='checkbox' className='mr-3 checkbox border-slate-900' checked={selectedGender==="male"} onChange={()=> onCheckboxChange("male")} />
    				</label>
    			</div>
    			<div className='form-control'>
    				<label className={`flex align-center label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
    					<span className='label-text'>Female</span>
    					<input type='checkbox' className='checkbox border-slate-900' checked={selectedGender==="female"} onChange={()=> onCheckboxChange("female")}/>
    				</label>
    			</div>
    		</div>
    	);
    };
    export default GenderCheckbox; 